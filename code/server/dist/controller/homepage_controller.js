class HomepageController {
    // méthodes appelées par le router
    index = (req, res) => {
        return res.send("homepage controller");
    };
}
export default HomepageController;
