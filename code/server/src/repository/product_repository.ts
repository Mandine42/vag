import type { Pool, QueryResult } from "mysql2/promise";
import MySQLService from "../service/mysql_service.js";
import type Product from "../model/product.js";
import type Category from "../model/category.js";
import CategoryRepository from "./category_repository.js";
class ProductRepository {
	// accéder au service MySQL
	mySQLService = new MySQLService();
	// table principale utilisée par la classe
	table = "product";
	// selection de tous les enregistrements
	public selectAll = async (): Promise<QueryResult | unknown | Product[]> => {
		// connection à la base de données
		//await permet de créer un temps d'attente
		// obligatoirement utilisé dans une fonction asynchrone
		// permet de récuperer automatiquement le contenu de la promesse
		const connection: Pool = await this.mySQLService.connect();
		// requête SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} `;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			const results = await connection.execute(query);

			const fullResults = results.shift() as Product[];
			// boucler sur les résultats
			for (let i = 0; i < fullResults.length; i++) {
				//requête pour récuperer un objet Brand
				const category: Category | unknown =
					await new CategoryRepository().selectOne({
						id: fullResults[i].category_id,
					});

				fullResults[i].category = category;
			}
			// renvoyer les résultats de la requête
			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};

	public selectOne = async (
		data: object,
	): Promise<QueryResult | unknown | Product> => {
		const connection: Pool = await this.mySQLService.connect();
		// création d'une variable de requête, pour une requête préparée éviter les injections SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} WHERE ${this.table}.id = :id ;`;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);
			const fullResults: Product = (
				results.shift() as Product[]
			).shift() as Product;

			const category: Category | unknown =
				await new CategoryRepository().selectOne({
					id: fullResults.category_id,
				});

			fullResults.category = category;
			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};

	public create = async (data: Product) => {
		const connection: Pool = await this.mySQLService.connect();

		// créer un canal isole pour la transaction

		const transaction = await connection.getConnection();

		try {
			// démarrer une transaction
			await transaction.beginTransaction();
			//première requête
			let query = `
			INSERT INTO ${process.env.MYSQL_DB}.${this.table}
			VALUE
				(NULL, :name, :description, :category_id);
			`;

			await connection.execute(query, data);

			//deuxième requête: récupérer le dernier identifiant inséré
			query = "SET @category_id = LAST_INSERT_ID();";
			await connection.execute(query);

			// inserer les options
			// split permet de changer une chaîne de chararctère en tableau
			const values = data.category_id
				?.split(",")
				.map((value) => `(@category_id, ${value})`)
				.join(",");

			//dernière requête renvoie les informations d'ensemble
			query = `
				INSERT INTO ${process.env.MYSQL_DB}.category
				VALUES ${values}`;

			const results = await connection.execute(query);

			//valider la transaction
			transaction.commit();

			return results;
		} catch (error) {
			// annuler la transaction
			transaction.rollback();

			return error;
		}
	};
	public update = async (data: Product) => {
		const connection: Pool = await this.mySQLService.connect();

		// créer un canal isole pour la transaction

		const transaction = await connection.getConnection();

		try {
			// démarrer une transaction
			await transaction.beginTransaction();
			//première requête: mettre à jour la table
			let query = `
			UPDATE ${process.env.MYSQL_DB}.${this.table}
			SET
				${this.table}.name = :name, 
				${this.table}.description = :description, 
				${this.table}.category_id = :category_id
			WHERE
				${this.table}.id = :id
			;
			`;

			await connection.execute(query, data);

			// deuxième requête
			// supprimer

			query = ` DELETE FROM ${process.env.MYSQL_DB}.category
            			WHERE category_id = ?;`;
			await connection.execute(query, data);

			// inserer les options
			// split permet de changer une chaîne de chararctère en tableau
			const values = data.category_id
				?.split(",")
				.map((value) => `(:id, ${value})`)
				.join(",");

			//dernière requête renvoie les informations d'ensemble
			query = `
				INSERT INTO ${process.env.MYSQL_DB}.category
				VALUES ${values}`;

			const results = await connection.execute(query, data);

			//valider la transaction
			transaction.commit();

			// return results;
		} catch (error) {
			// annuler la transaction
			transaction.rollback();

			return error;
		}
	};
}
export default ProductRepository;
