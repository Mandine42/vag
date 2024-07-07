import DistrictRepository from "../repository/district_repository.js";
class DistrictController {
    // méthodes appelées par le router
    index = async (req, res) => {
        return res.send(await new DistrictRepository().selectAll());
    };
}
export default DistrictController;
