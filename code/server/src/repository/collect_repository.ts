import type { Pool, QueryResult } from "mysql2/promise";
import MySQLService from "../service/mysql_service.js";
import type Collect from "../model/collect.js";
import type District from "../model/district.js";
import DistrictRepository from "./district_repository.js";
import type UserShare from "../model/user_share.js";
import UserShareRepository from "./user_share_repository.js";
import ShareRepository from "./share_repository.js";
import type Share from "../model/share.js";
import type User from "../model/user.js";
import RoleRepository from "./role_repository.js";
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
				//requête pour récuperer un objet District
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

	public create = async (data: Collect) => {
		const connection: Pool = await this.mySQLService.connect();

		// créer un canal isole pour la transaction

		const transaction = await connection.getConnection();
		console.log(data);

		try {
			// démarrer une transaction
			await transaction.beginTransaction();
			//première requête
			const query = `
				INSERT INTO ${process.env.MYSQL_DB}. ${this.table} VALUE (NULL, :adress, :meeting_point, :iframe, :district_id)
			`;

			const results = await connection.execute(query, data);

			transaction.commit();

			return results;
		} catch (error) {
			// annuler la transaction
			transaction.rollback();

			return error;
		}
	};
	public update = async (data: Collect) => {
		const connection: Pool = await this.mySQLService.connect();

		// créer un canal isole pour la transaction

		const transaction = await connection.getConnection();

		try {
			// démarrer une transaction
			await transaction.beginTransaction();
			//première requête: mettre à jour la
			const query = `
			UPDATE ${process.env.MYSQL_DB}.${this.table}
			SET
				${this.table}.adress = :adress, 
				${this.table}.meeting_point = :meeting_point, 
				${this.table}.iframe = :iframe, 
				${this.table}.district_id = :district_id
			WHERE
				${this.table}.id = :id
			;
			`;

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

	public delete = async (data: Collect) => {
		// connexion
		const connection: Pool = await this.mySQLService.connect();

		// canal isolé pour la transaction
		const transaction = await connection.getConnection();

		try {
			// démarrer une transaction
			await transaction.beginTransaction();

			// supprimer la collect
			const query = `DELETE FROM
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
			const collectResult = await connection.execute(query, data);
			const collectResults = results.shift() as User;
			// console.log(collectResult);

			return collectResult;
		} catch (error) {
			return error;
		}
	};
}

export default CollectRepository;
