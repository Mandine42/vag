import MySQLService from "../service/mysql_service.js";
import DistrictRepository from "./district_repository.js";
class CollectRepository {
    // accéder au service MySQL
    mySQLService = new MySQLService();
    // table principale utilisée par la classe
    table = "collect";
    // selection de tous les enregistrements
    selectAll = async () => {
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
            const fullResults = results.shift();
            // boucler sur les résultats
            for (let i = 0; i < fullResults.length; i++) {
                //requête pour récuperer un objet Brand
                const district = await new DistrictRepository().selectOne({
                    id: fullResults[i].district_id,
                });
                fullResults[i].district = district;
            }
            // renvoyer les résultats de la requête
            return fullResults;
        }
        catch (error) {
            return error;
        }
    };
    selectOne = async (data) => {
        const connection = await this.mySQLService.connect();
        // création d'une variable de requête, pour une requête préparée éviter les injections SQL
        const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} WHERE ${this.table}.id = :id ;`;
        // exécuter la requête SQL ou récupérer une erreur
        try {
            // fournir la valeur des variables de requête, sous la forme d'un objet
            const results = await connection.execute(query, data);
            const fullResults = results.shift().shift();
            const district = await new DistrictRepository().selectOne({
                id: fullResults.district_id,
            });
            fullResults.district = district;
            return fullResults;
        }
        catch (error) {
            return error;
        }
    };
    create = async (data) => {
        const connection = await this.mySQLService.connect();
        // créer un canal isole pour la transaction
        const transaction = await connection.getConnection();
        try {
            // démarrer une transaction
            await transaction.beginTransaction();
            //première requête
            const query = `
			INSERT INTO ${process.env.MYSQL_DB}.${this.table}
			VALUE
				(NULL, :adress, :meeting_point, :district_id);
			`;
            const results = await connection.execute(query, data);
            //deuxième requête: récupérer le dernier identifiant inséré
            // query = "SET @collect_id = LAST_INSERT_ID();";
            // await connection.execute(query);
            // inserer les options
            // split permet de changer une chaîne de chararctère en tableau
            // const values = data.district_id
            // 	?.split(",")
            // 	.map((value) => `(@collect_id, ${value})`)
            // 	.join(",");
            // //dernière requête renvoie les informations d'ensemble
            // query = `
            // 	INSERT INTO ${process.env.MYSQL_DB}.district
            // 	VALUES ${values}`;
            // const results = await connection.execute(query);
            //valider la transaction
            transaction.commit();
            return results;
        }
        catch (error) {
            // annuler la transaction
            transaction.rollback();
            return error;
        }
    };
    update = async (data) => {
        const connection = await this.mySQLService.connect();
        // créer un canal isole pour la transaction
        const transaction = await connection.getConnection();
        try {
            // démarrer une transaction
            await transaction.beginTransaction();
            //première requête: mettre à jour la
            let query = `
			UPDATE ${process.env.MYSQL_DB}.${this.table}
			SET
				${this.table}.adress = :adress, 
				${this.table}.meeting_point = :meeting_point, 
				${this.table}.district_id = :district_id
			WHERE
				${this.table}.id = :id
			;
			`;
            await connection.execute(query, data);
            // deuxième requête
            // supprimer les options existantes du vehicule à supprimer
            query = `DELETE FROM ${process.env.MYSQL_DB}.district
					 WHERE district.district_id = :id;`;
            await connection.execute(query, data);
            // inserer les options
            // split permet de changer une chaîne de chararctère en tableau
            const values = data.district_id
                ?.split(",")
                .map((value) => `(:id, ${value})`)
                .join(",");
            //dernière requête renvoie les informations d'ensemble
            query = `
				INSERT INTO ${process.env.MYSQL_DB}.district
				VALUES ${values}`;
            const results = await connection.execute(query, data);
            //valider la transaction
            transaction.commit();
            // return results;
        }
        catch (error) {
            // annuler la transaction
            transaction.rollback();
            return error;
        }
    };
}
export default CollectRepository;
