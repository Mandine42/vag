import type { QueryResult } from "mysql2";
import MySQLService from "../service/mysql_service.js";
import type { Pool } from "mysql2/promise";
import type User from "../model/user.js";
import type UserShare from "../model/user_share.js";

class UserShareRepository {
	// accéder au service MySQL
	private mySQLService = new MySQLService();

	// table principale utilisée par la classe
	private table = "user_share";

	// selection de tous les enregistrements
	public selectAll = async (): Promise<QueryResult | unknown | UserShare[]> => {
		const connection: Pool = await this.mySQLService.connect();
		// requête SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} `;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			const results = await connection.execute(query);
			// renvoyer les résultats de la requête
			// shift permet de récuperer le premier indice d'un array
			return results.shift();
		} catch (error: unknown) {
			return error;
		}
	};

	// data représente req.params envoyer par le controleur
	public selectOne = async (
		data: object,
	): Promise<QueryResult | unknown | UserShare> => {
		const connection: Pool = await this.mySQLService.connect();
		// création d'une variable de requête, pour une requête préparée éviter les injections SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} WHERE ${this.table}.id = :id ;`;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);
			// renvoyer les résultats de la requête
			// shift permet de récuperer le premier indice d'un array
			return (results.shift() as []).shift();
		} catch (error: unknown) {
			return error;
		}
	};

	// selection parmis une liste
	public selectInList = async (
		data: string,
	): Promise<QueryResult | unknown | UserShare[]> => {
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
}

export default UserShareRepository;
