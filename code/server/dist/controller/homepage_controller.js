class HomepageController {
    // méthodes appelées par le router
    index = (req, res) => {
        return res.status(200).json({
            message: "Welcome to VAG API",
        });
    };
}
export default HomepageController;
