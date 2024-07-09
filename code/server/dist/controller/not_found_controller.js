class NotFoundController {
    // méthodes appelées par le router
    index = (req, res) => {
        return res.status(200).json({
            message: "Not found VAG API",
        });
    };
}
export default NotFoundController;
