import mysql, { type Pool } from "mysql2/promise";
class MySQLService {
	// passe par la classe sans creer d'objet
	public static connection: Pool;
	public connect = async (): Promise<Pool> => {
		// si aucune connexion n'existe
		// si la connexion existe, ne pase pas par if et sinon créer la connexion
		if (!MySQLService.connection)
			MySQLService.connection = mysql.createPool({
				host: process.env.MYSQL_HOST,
				database: process.env.MYSQL_DB,
				user: process.env.MYSQL_USER,
				password: process.env.MYSQL_PASSWORD,
				// permet de créer des requettes préparées
				namedPlaceholders: true,
			});
		return MySQLService.connection;
	};
}

export default MySQLService;
