import type { QueryResult } from "mysql2";
import MySQLService from "../service/mysql_service.js";
import type UserShare from "../model/user_share.js";
import type { Pool } from "mysql2/promise";
import type User from "../model/user.js";
import ShareRepository from "./share_repository.js";
import type Share from "../model/share.js";

import RoleRepository from "./role_repository.js";
import CityRepository from "./city_repository.js";
import DistrictRepository from "./district_repository.js";
import type Role from "../model/role.js";

class UserRepository {
	// accéder au service MySQL
	private mySQLService = new MySQLService();

	// table principale utilisée par la classe
	private table = "user";

	// selection de tous les enregistrements
	public selectAll = async (): Promise<QueryResult | unknown | User[]> => {
		// connection à la base de données
		//await permet de créer un temps d'attente
		// obligatoirement utilisé dans une fonction asynchrone
		// permet de récuperer automatiquement le contenu de la promesse
		const connection: Pool = await this.mySQLService.connect();
		// requête SQL
		const query = `
			SELECT
				${this.table}.*,
				GROUP_CONCAT(donors.id) AS donors_share_id,
				GROUP_CONCAT(beneficaries.id) AS beneficiaries_share_id
			FROM ${process.env.MYSQL_DB}.${this.table}
			LEFT JOIN ${process.env.MYSQL_DB}.user_share AS donors
			ON donors.donor_id = user.id
			LEFT JOIN ${process.env.MYSQL_DB}.user_share AS beneficaries
			ON beneficaries.beneficiary_id = user.id
			GROUP BY user.id;
        `;
		// LEFT JOIN : Utilisé pour inclure tous les utilisateurs même s'ils n'ont pas de correspondance dans user_share.
		// exécuter la requête SQL ou récupérer une erreur
		try {
			const results = await connection.execute(query);

			const fullResults = results.shift() as User[];
			// boucler sur les résultats
			for (let i = 0; i < fullResults.length; i++) {
				const donors: Share | unknown =
					await new ShareRepository().selectInList(
						fullResults[i].donors_share_id as string,
					);
				fullResults[i].donors_share = donors;

				const beneficiaries: Share | unknown =
					await new ShareRepository().selectInList(
						fullResults[i].beneficiaries_share_id as string,
					);
				fullResults[i].beneficiaries_share = beneficiaries;
			}

			// renvoyer les résultats de la requête
			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};

	public selectOne = async (
		data: object,
	): Promise<QueryResult | unknown | User> => {
		const connection: Pool = await this.mySQLService.connect();
		// création d'une variable de requête, pour une requête préparée éviter les injections SQL
		const query = `
			SELECT
				${this.table}.*,
				GROUP_CONCAT(donors.id) AS donors_share_id,
				GROUP_CONCAT(beneficaries.id) AS beneficiaries_share_id
			FROM ${process.env.MYSQL_DB}.${this.table}
			WHERE ${this.table}.id = :id
			GROUP BY user.id;
		`;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);

			const fullResults: User | unknown = (results.shift() as User[]).shift();

			// récuperer un objet District
			const district = await new DistrictRepository().selectOne({
				id: (fullResults as User).district_id,
			});

			(fullResults as User).district = district;

			// récuperer un objet Role
			const role = await new RoleRepository().selectOne({
				id: (fullResults as User).role_id,
			});

			(fullResults as User).role = role;

			// renvoyer les résultats de la requête
			// shift permet de récuperer le premier indice d'un array
			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};
	public register = async (data: User) => {
		const connection: Pool = await this.mySQLService.connect();

		// créer un canal isole pour la transaction

		const transaction = await connection.getConnection();

		try {
			// démarrer une transaction
			await transaction.beginTransaction();
			//première requête
			const query = `
			INSERT INTO ${process.env.MYSQL_DB}.${this.table}
			VALUE
				(NULL, :firstname, :lastname, :email, :phone_number, :password, :adress, :registration_date, :isActive, :last_shared, :district_id, 2);
			`;

			const results = await connection.execute(query, data);

			//valider la transaction
			transaction.commit();
			console.log(results);

			return results;
		} catch (error) {
			// annuler la transaction
			transaction.rollback();

			return error;
		}
	};

	public update = async (data: User) => {
		const connection: Pool = await this.mySQLService.connect();

		// créer un canal isole pour la transaction

		const transaction = await connection.getConnection();

		try {
			// démarrer une transaction
			await transaction.beginTransaction();
			//première requête: mettre à jour la table user
			let query = `
			UPDATE ${process.env.MYSQL_DB}.${this.table}
			SET
				${this.table}.firstname = :firstname, 
				${this.table}.lastname = :lastname, 
				${this.table}.email = :email,
				${this.table}.phone_number = :phone_number,
				${this.table}.password = :password,
				${this.table}.adress = :adress,
				${this.table}.registration_date = :registration_date,
				${this.table}.isActive = :isActive,
				${this.table}.last_shared = :last_shared,
				${this.table}.district_id = :district_id,
				${this.table}.role_id = :role_id
			WHERE
				${this.table}.id = :id
			;
			`;

			await connection.execute(query, data);

			// deuxième requête
			query = `
            DELETE FROM ${process.env.MYSQL_DB}.user_share
            WHERE donor_id = :id;
        `;
			await connection.execute(query, data);

			query = `
            DELETE FROM ${process.env.MYSQL_DB}.user_share
            WHERE beneficiary_id = :id;
        `;
			await connection.execute(query, data);

			// query = `DELETE FROM ${process.env.MYSQL_DB}.donors_share_id,.beneficiaries_share_id
			// 		 WHERE donors_share.id = :id, beneficiaries_share_id = :id;`;

			// const results = await connection.execute(query, data);

			//valider la transaction
			transaction.commit();

			// return results;
		} catch (error) {
			// annuler la transaction
			transaction.rollback();

			return error;
		}
	};

	public delete = async (data: User) => {
		// connexion
		const connection: Pool = await this.mySQLService.connect();

		// canal isolé pour la transaction
		const transaction = await connection.getConnection();

		try {
			// démarrer une transaction
			await transaction.beginTransaction();

			// première requête

			let query = ` DELETE FROM
			${process.env.MYSQL_DB}.user_share
                WHERE user_share.user_id = :id;`;

			await connection.execute(query, data);

			// supprimer le véhicule
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

	public getUserByEmail = async (
		data: User,
	): Promise<QueryResult | unknown | User> => {
		const connection: Pool = await this.mySQLService.connect();
		// création d'une variable de requête, pour une requête préparée éviter les injections SQL
		const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} WHERE ${this.table}.email = :email ;`;

		// exécuter la requête SQL ou récupérer une erreur
		try {
			// fournir la valeur des variables de requête, sous la forme d'un objet
			const results = await connection.execute(query, data);

			const fullResults: User | undefined = (results.shift() as User[]).shift();

			// récuperer un objet District
			const district = await new DistrictRepository().selectOne({
				id: (fullResults as User).district_id,
			});

			(fullResults as User).district = district;

			// récuperer un objet Role
			const role = await new RoleRepository().selectOne({
				id: (fullResults as User).role_id,
			});

			(fullResults as User).role = role;

			// renvoyer les résultats de la requête
			// shift permet de récuperer le premier indice d'un array
			return fullResults;
		} catch (error: unknown) {
			return error;
		}
	};
}
export default UserRepository;
