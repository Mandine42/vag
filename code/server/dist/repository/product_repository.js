import MySQLService from "../service/mysql_service.js";
import CategoryRepository from "./category_repository.js";
class ProductRepository {
    // accéder au service MySQL
    mySQLService = new MySQLService();
    // table principale utilisée par la classe
    table = "product";
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
                const category = await new CategoryRepository().selectOne({
                    id: fullResults[i].category_id,
                });
                fullResults[i].category = category;
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
            const category = await new CategoryRepository().selectOne({
                id: fullResults.category_id,
            });
            fullResults.category = category;
            return fullResults;
        }
        catch (error) {
            return error;
        }
    };
}
export default ProductRepository;
