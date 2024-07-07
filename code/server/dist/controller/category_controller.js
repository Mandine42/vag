import CategoryRepository from "../repository/category_repository.js";
class CategoryController {
    // méthodes appelées par le router
    index = async (req, res) => {
        return res.send(await new CategoryRepository().selectAll());
    };
}
export default CategoryController;
