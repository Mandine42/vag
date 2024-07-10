import MySQLService from "../service/mysql_service.js";
import UserRepository from "./user_share_repository.js";
class userrepository {
    // accéder au service MySQL
    mySQLService = new MySQLService();
    // table principale utilisée par la classe
    table = "user";
    // selection de tous les enregistrements
    selectAll = async () => {
        // connection à la base de données
        //await permet de créer un temps d'attente
        // obligatoirement utilisé dans une fonction asynchrone
        // permet de récuperer automatiquement le contenu de la promesse
        const connection = await this.mySQLService.connect();
        // requête SQL
        const query = `
                        SELECT ${this.table}.*, GROUP_CONCAT(DISTINCT user_share.id) AS user_share_ids
                        FROM ${process.env.MYSQL_DB}.${this.table}
                        LEFT JOIN ${process.env.MYSQL_DB}.user_share AS donor_shares
                        ON donor_shares.donor_id = ${this.table}.id
                        LEFT JOIN ${process.env.MYSQL_DB}.user_share AS beneficiary_shares
                        ON beneficiary_shares.beneficiary_id = ${this.table}.id
                        GROUP BY ${this.table}.id
                    `;
        // LEFT JOIN : Utilisé pour inclure tous les utilisateurs même s'ils n'ont pas de correspondance dans user_share.
        // exécuter la requête SQL ou récupérer une erreur
        try {
            const results = await connection.execute(query);
            const fullResults = results.shift();
            // boucler sur les résultats
            for (let i = 0; i < fullResults.length; i++) {
                const donor = await new UserRepository().selectInList(fullResults[i].donor_id);
                // assigner le résultat de la requête à une propriété
                fullResults[i].donor = donor;
                // requete pour récupérer les options
                const beneficiary = await new UserRepository().selectInList(fullResults[i].beneficiary_id);
                fullResults[i].beneficiary = beneficiary;
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
            const donor = await new UserRepository().selectOne({
                id: fullResults.donor_id,
            });
            fullResults.donor = donor;
            const beneficiary = await new UserRepository().selectOne({
                id: fullResults.beneficiary_id,
            });
            fullResults.beneficiary = beneficiary;
            // renvoyer les résultats de la requête
            // shift permet de récuperer le premier indice d'un array
            return fullResults;
        }
        catch (error) {
            return error;
        }
    };
}
export default UserRepository;
