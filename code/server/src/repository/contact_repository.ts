import { Document } from "mongodb";
import MongoDBService from "../service/mongodb_service.js";
import User from "../model/user.js";
import { Pool } from "mysql2";

class ContactRepository {
	// collection principale utilisée par la clss
	private collection = "contact";

	//selection de tout les documents
	public findAll = async (): Promise<unknown> => {
		// connexion au serveur
		const connection = await new MongoDBService().connect();
		await connection.connect();

		// selection de la collection(table)
		const collection = connection.db().collection(this.collection);

		// requete (méthode)
		const results = collection.find().toArray();

		// retourner les résultats
		return results;
	};

	public create = async (data: object): Promise<unknown> => {
		// connexion au serveur
		const connection = await new MongoDBService().connect();
		await connection.connect();

		// selection de la collection(table)
		const collection = connection.db().collection(this.collection);

		// requete (méthode)
		const results = collection.insertOne(data);

		// retourner les résultats
		return results;
	};
}

export default ContactRepository;
