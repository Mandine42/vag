import MongoDBService from "../service/mongodb_service.js";
class ContactRepository {
    // collection principale utilisée par la clss
    collection = "contact";
    //selection de tout les documents
    findAll = async () => {
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
    create = async (data) => {
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
