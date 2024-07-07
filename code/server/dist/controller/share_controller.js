import ShareRepository from "../repository/share_repository.js";
class ShareController {
    // méthodes appelées par le router
    index = async (req, res) => {
        return res.send(await new ShareRepository().selectAll());
    };
}
export default ShareController;
