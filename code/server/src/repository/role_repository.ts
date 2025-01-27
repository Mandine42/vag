import type { Pool, QueryResult } from "mysql2/promise";
import MySQLService from "../service/mysql_service.js";
import type City from "../model/city.js";
import type Role from "../model/role.js";
class RoleRepository {
	// accéder au service MySQL
	mySQLService = new MySQLService();
	// table principale utilisée par la classe
	table = "role";
	// selection de tous les enregistrements
	public selectAll = async (): Promise<QueryResult | unknown | Role[]> => {
		// connection à la base de données
		//await permet de créer un temps d'attente
		// obligatoirement utilisé dans une fonction asynchrone
		// permet de récuperer automatiquement le contenu de la promesse
		const connection = await this.mySQLService.connect();
		// requête SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} `;
		// exécuter la requête SQL ou récupérer une erreur
		try {
			const results = await connection.execute(query);
			// renvoyer les résultats de la requête
			return results.shift();
		} catch (error) {
			return error;
		}
	};
	public selectOne = async (data: Role) => {
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
}
export default RoleRepository;
