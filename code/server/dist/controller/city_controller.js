import CityRepository from "../repository/city_repository.js";
class CityController {
    // méthodes appelées par le router
    index = async (req, res) => {
        return res.send(await new CityRepository().selectAll());
    };
}
export default CityController;
