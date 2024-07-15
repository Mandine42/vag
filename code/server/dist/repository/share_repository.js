import MySQLService from "../service/mysql_service.js";
import ProductRepository from "./product_repository.js";
import CollectRepository from "./collect_repository.js";
class ShareRepository {
    // accéder au service MySQL
    mySQLService = new MySQLService();
    // table principale utilisée par la classe
    table = "share";
    // selection de tous les enregistrements
    selectAll = async () => {
        const connection = await this.mySQLService.connect();
        // requête SQL
        const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} `;
        try {
            const results = await connection.execute(query);
            const fullResults = results.shift();
            // boucler sur les résultats
            for (let i = 0; i < fullResults.length; i++) {
                const product = await new ProductRepository().selectOne({
                    id: fullResults[i].product_id,
                });
                fullResults[i].product = product;
                const collect = await new CollectRepository().selectOne({
                    id: fullResults[i].collect_id,
                });
                fullResults[i].collect = collect;
            }
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
            const product = await new ProductRepository().selectOne({
                id: fullResults.product_id,
            });
            fullResults.product = product;
            const collect = await new CollectRepository().selectOne({
                id: fullResults.collect_id,
            });
            fullResults.collect = collect;
            return fullResults;
        }
        catch (error) {
            return error;
        }
    };
    // selection parmis une liste
    selectInList = async (data) => {
        const connection = await this.mySQLService.connect();
        const query = ` SELECT ${this.table}.*
						FROM ${process.env.MYSQL_DB}. ${this.table}
						WHERE ${this.table}.id IN (${data});`;
        // exécuter la requête SQL ou récupérer une erreur
        try {
            // fournir la valeur des variables de requête, sous la forme d'un objet
            const results = await connection.execute(query, data);
            return results.shift();
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
            let query = `
			INSERT INTO ${process.env.MYSQL_DB}.${this.table}
			VALUE
				(NULL, :quantity, :collect_datetime, :expiration, :product_id, :collect_id);
			`;
            await connection.execute(query, data);
            //deuxième requête: récupérer le dernier identifiant inséré
            query = "SET @share_id = LAST_INSERT_ID();";
            await connection.execute(query);
            // inserer les options
            // split permet de changer une chaîne de chararctère en tableau
            // const product = data.product_id
            // 	?.split(",")
            // 	.map((value) => `(@share_id, ${value})`)
            // 	.join(",");
            // const collect = data.collect_id
            // 	?.split(",")
            // 	.map((value) => `(@share_id, ${value})`)
            // 	.join(",");
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
            await connection.execute(query, data);
            // inserer les options
            // split permet de changer une chaîne de chararctère en tableau
            const values = data.user_share_id
                ?.split(",")
                .map((value) => `(:id, ${value})`)
                .join(",");
            //dernière requête renvoie les informations d'ensemble
            query = `
						INSERT INTO ${process.env.MYSQL_DB}.user_share
						VALUES ${values};`;
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
    delete = async (data) => {
        // connexion
        const connection = await this.mySQLService.connect();
        // canal isolé pour la transaction
        const transaction = await connection.getConnection();
        try {
            // démarrer une transaction
            await transaction.beginTransaction();
            // première requête
            // supprimer les user_share existants du share à supprimer
            let query = ` DELETE FROM
			${process.env.MYSQL_DB}.user_share
                WHERE user_share.share_id = :id;`;
            await connection.execute(query, data);
            // supprimer un share
            query = `DELETE FROM
			${process.env.MYSQL_DB}.${this.table}
                WHERE ${this.table}.id = :id;`;
            const results = await connection.execute(query, data);
            // valider la transaction
            await transaction.commit();
            return results;
        }
        catch (error) {
            // annuler la transaction
            await transaction.rollback();
            return error;
        }
    };
}
export default ShareRepository;
