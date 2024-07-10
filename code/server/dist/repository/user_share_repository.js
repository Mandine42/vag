import MySQLService from "../service/mysql_service.js";
class UserShareRepository {
    // accéder au service MySQL
    mySQLService = new MySQLService();
    // table principale utilisée par la classe
    table = "user_share";
    // selection de tous les enregistrements
    selectAll = async () => {
        const connection = await this.mySQLService.connect();
        // requête SQL
        const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} `;
        // exécuter la requête SQL ou récupérer une erreur
        try {
            const results = await connection.execute(query);
            // renvoyer les résultats de la requête
            // shift permet de récuperer le premier indice d'un array
            return results.shift();
        }
        catch (error) {
            return error;
        }
    };
    // data représente req.params envoyer par le controleur
    selectOne = async (data) => {
        const connection = await this.mySQLService.connect();
        // création d'une variable de requête, pour une requête préparée éviter les injections SQL
        const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} WHERE ${this.table}.id = :id ;`;
        // exécuter la requête SQL ou récupérer une erreur
        try {
            // fournir la valeur des variables de requête, sous la forme d'un objet
            const results = await connection.execute(query, data);
            // renvoyer les résultats de la requête
            // shift permet de récuperer le premier indice d'un array
            return results.shift().shift();
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
}
export default UserShareRepository;
