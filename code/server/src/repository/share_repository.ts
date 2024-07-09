import type { Pool, QueryResult } from "mysql2/promise";
import MySQLService from "../service/mysql_service.js";
import type Share from "../model/share.js";
import type Product from "../model/product.js";
import ProductRepository from "./product_repository.js";
import type Collect from "../model/collect.js";
import CollectRepository from "./collect_repository.js";
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
}
export default ShareRepository;
