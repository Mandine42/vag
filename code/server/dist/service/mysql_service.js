import mysql from "mysql2/promise";
class MySQLService {
    connect = async () => {
        const connection = mysql.createPool({
            host: process.env.MYSQL_HOST,
            database: process.env.MYSQL_DB,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            // permet de créer des requettes préparées
            namedPlaceholders: true,
        });
        return connection;
    };
}
export default MySQLService;
