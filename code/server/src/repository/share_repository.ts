import type { Pool, QueryResult } from "mysql2/promise";
import MySQLService from "../service/mysql_service.js";
import type Share from "../model/share.js";
import type Product from "../model/product.js";
import ProductRepository from "./product_repository.js";
import type Collect from "../model/collect.js";
import CollectRepository from "./collect_repository.js";
import type User from "../model/user.js";
import RoleRepository from "./role_repository.js";
class ShareRepository {
	// accéder au service MySQL
	mySQLService = new MySQLService();
	// table principale utilisée par la classe
	table = "share";

	// selection de tous les enregistrements
	public selectAll = async (): Promise<QueryResult | unknown | Share[]> => {
		const connection: Pool = await this.mySQLService.connect();
		// requête SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} `;

		try {
			const results = await connection.execute(query);

			const fullResults = results.shift() as Share[];
			// boucler sur les résultats
			for (let i = 0; i < fullResults.length; i++) {
				const product: Product | unknown =
					await new ProductRepository().selectOne({
						id: fullResults[i].product_id,
					});

				fullResults[i].product = product;

				const collect: Collect | unknown =
					await new CollectRepository().selectOne({
						id: fullResults[i].collect_id,
					});

				fullResults[i].collect = collect;
			}

			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};

	public selectOne = async (data: object): Promise<QueryResult | unknown> => {
		const connection: Pool = await this.mySQLService.connect();
		// création d'une variable de requête, pour une requête préparée éviter les injections SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} WHERE ${this.table}.id = :id ;`;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);
			const fullResults: Share = (results.shift() as Share[]).shift() as Share;

			const product: Product | unknown =
				await new ProductRepository().selectOne({
					id: fullResults.product_id,
				});

			fullResults.product = product;

			const collect: Collect | unknown =
				await new CollectRepository().selectOne({
					id: fullResults.collect_id,
				});

			fullResults.collect = collect;

			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};

	// selection parmis une liste
	public selectInList = async (
		data: string,
	): Promise<QueryResult | unknown | Share[]> => {
		const connection: Pool = await this.mySQLService.connect();

		const query = ` SELECT ${this.table}.*
						FROM ${process.env.MYSQL_DB}. ${this.table}
						WHERE ${this.table}.id IN (${data});`;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);

			return results.shift() as [];
		} catch (error: unknown) {
			return error;
		}
	};

	public create = async (data: Share) => {
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
				(NULL, :quantity, :collect_datetime, :expiration, :product_id, :collect_id);
			`;

			await connection.execute(query, data);

			//deuxième requête: récupérer le dernier identifiant inséré
			query = "SET @share_id = LAST_INSERT_ID();";
			await connection.execute(query);

			//dernière requête renvoie les informations d'ensemble
			query = `
				INSERT INTO ${process.env.MYSQL_DB}.user_share
				VALUES (
						NULL,
						:donor_id,
						NULL,
						@share_id
					);
				`;

			const results = await connection.execute(query, data);

			//valider la transaction
			transaction.commit();

			return results;
		} catch (error) {
			// annuler la transaction
			transaction.rollback();

			return error;
		}
	};

	public update = async (data: Share) => {
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
						${this.table}.quantity = :quantity,
						${this.table}.collect_datetime = :collect_datetime,
						${this.table}.expiration = :expiration,
						${this.table}.product_id = :product_id,
						${this.table}.collect_id = :collect_id
					WHERE
						${this.table}.id = :id
					;
					`;
			await connection.execute(query, data);
			// deuxième requête
			// supprimer les user_share de share
			query = `  DELETE FROM ${process.env.MYSQL_DB}.user_share
    					WHERE user_share.share_id = :id`;

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

	public delete = async (data: Share) => {
		// connexion
		const connection: Pool = await this.mySQLService.connect();

		// canal isolé pour la transaction
		const transaction = await connection.getConnection();

		try {
			// démarrer une transaction
			await transaction.beginTransaction();
			let query = `  DELETE FROM ${process.env.MYSQL_DB}.user_share
    					WHERE user_share.share_id = :id`;

			await connection.execute(query, data);

			// supprimer un share
			query = `DELETE FROM
			${process.env.MYSQL_DB}.${this.table}
                WHERE ${this.table}.id = :id;`;
			const results = await connection.execute(query, data);

			// valider la transaction
			await transaction.commit();

			return results;
		} catch (error) {
			// annuler la transaction
			await transaction.rollback();

			return error;
		}
	};

	public getUserByEmail = async (data: User) => {
		const connection: Pool = await this.mySQLService.connect();

		//requête sql
		const query = `
		SELECT ${this.table}.*
		FROM ${process.env.MYSQL_DB}.${this.table}
		WHERE ${this.table}.email = :email ;

		`;
		try {
			//executer la requête
			const results = await connection.execute(query, data);
			const fullResult: User | undefined = (results.shift() as User[]).shift();

			// récuperer un objet Role
			const role = await new RoleRepository().selectOne({
				id: (fullResult as User).role_id,
			});

			(fullResult as User).role = role;
			// console.log(role);
			const shareResult = await connection.execute(query, data);
			const shareResults = results.shift() as User;
			console.log(shareResult);

			return shareResult;
		} catch (error) {
			return error;
		}
	};
}

export default ShareRepository;
