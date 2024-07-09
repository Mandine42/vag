import type { Pool, QueryResult } from "mysql2/promise";
import MySQLService from "../service/mysql_service.js";
import type Collect from "../model/collect.js";
import type District from "../model/district.js";
import DistrictRepository from "./district_repository.js";
class CollectRepository {
	// accéder au service MySQL
	mySQLService = new MySQLService();
	// table principale utilisée par la classe
	table = "collect";
	// selection de tous les enregistrements
	public selectAll = async (): Promise<QueryResult | unknown | Collect[]> => {
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

			const fullResults = results.shift() as Collect[];
			// boucler sur les résultats
			for (let i = 0; i < fullResults.length; i++) {
				//requête pour récuperer un objet Brand
				const district: District | unknown =
					await new DistrictRepository().selectOne({
						id: fullResults[i].district_id,
					});

				fullResults[i].district = district;
			}
			// renvoyer les résultats de la requête
			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};

	public selectOne = async (data: object) => {
		const connection: Pool = await this.mySQLService.connect();
		// création d'une variable de requête, pour une requête préparée éviter les injections SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} WHERE ${this.table}.id = :id ;`;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);

			const fullResults: Collect = (
				results.shift() as Collect[]
			).shift() as Collect;

			const district: District | unknown =
				await new DistrictRepository().selectOne({
					id: fullResults.district_id,
				});

			fullResults.district = district;
			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};
}
export default CollectRepository;
