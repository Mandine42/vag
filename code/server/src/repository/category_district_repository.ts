import MySQLService from "../service/mysql_service.js";
class CategoryDistrictRepository {
	// accéder au service MySQL
	mySQLService = new MySQLService();
	// table principale utilisée par la classe
	table = "category_district";
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
			// renvoyer les résultats de la requête
			return results.shift();
		} catch (error) {
			return error;
		}
	};
}
export default CategoryDistrictRepository;
