class NotFoundController {
    // méthodes appelées par le router
    index = (req, res) => {
        return res.status(404).json({
            status: 404,
            message: "Not found VAG API",
        });
    };
}
export default NotFoundController;
