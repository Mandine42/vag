import CategoryDistrictRepository from "../repository/category_district_repository.js";
class CategoryDistrictController {
    // méthodes appelées par le router
    index = async (req, res) => {
        return res.send(await new CategoryDistrictRepository().selectAll());
    };
}
export default CategoryDistrictController;
