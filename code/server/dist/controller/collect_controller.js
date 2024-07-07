import CollectRepository from "../repository/collect_repository.js";
class CollectController {
    // méthodes appelées par le router
    index = async (req, res) => {
        return res.send(await new CollectRepository().selectAll());
    };
}
export default CollectController;
