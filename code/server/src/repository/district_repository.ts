import type { Pool, QueryResult } from "mysql2/promise";
import MySQLService from "../service/mysql_service.js";
import type District from "../model/district.js";
import Category_district from "../model/category_district.js";
import type CategoryDistrict from "../model/category_district.js";
import CategoryDistrictRepository from "./category_district_repository.js";
import type City from "../model/city.js";
import CityRepository from "./city_repository.js";

class DistrictRepository {
	// accéder au service MySQL
	mySQLService = new MySQLService();
	// table principale utilisée par la classe
	table = "district";
	// selection de tous les enregistrements

	public selectAll = async (): Promise<QueryResult | unknown | District[]> => {
		const connection: Pool = await this.mySQLService.connect();
		// requête SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} `;

		try {
			const results = await connection.execute(query);

			const fullResults = results.shift() as District[];
			// boucler sur les résultats
			for (let i = 0; i < fullResults.length; i++) {
				const categoryDistrict: CategoryDistrict | unknown =
					await new CategoryDistrictRepository().selectOne({
						id: fullResults[i].category_district_id,
					});

				fullResults[i].category_district = categoryDistrict;

				const city: City | unknown = await new CityRepository().selectOne({
					id: fullResults[i].city_id,
				});

				fullResults[i].city = city;
			}

			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};

	public selectOne = async (
		data: object,
	): Promise<QueryResult | unknown | District> => {
		const connection: Pool = await this.mySQLService.connect();
		// création d'une variable de requête, pour une requête préparée éviter les injections SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} WHERE ${this.table}.id = :id ;`;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);
			const fullResults: District = (
				results.shift() as District[]
			).shift() as District;

			const category_district: CategoryDistrict | unknown =
				await new CategoryDistrictRepository().selectOne({
					id: fullResults.category_district_id,
				});

			fullResults.category_district = category_district;

			const city: City | unknown = await new CityRepository().selectOne({
				id: fullResults.city_id,
			});

			fullResults.city = city;

			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};
}
export default DistrictRepository;
