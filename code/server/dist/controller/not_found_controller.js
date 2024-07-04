class NotFoundController {
    // méthodes appelées par le router
    index = (req, res) => {
        return res.send("not found - GET");
    };
}
export default NotFoundController;
