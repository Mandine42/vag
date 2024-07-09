import CategoryRepository from "../repository/category_repository.js";
class CategoryController {
    categoryrepository = new CategoryRepository();
    // méthodes appelées par le router
    index = async (req, res) => {
        const result = await this.categoryrepository.selectAll();
        // req.params permet de recuperer les variables de route
        console.log(req.params);
        if (result instanceof Error) {
            // environnement de developpement
            // condition ? vrai : faux
            return process.env.NODE_ENV === "dev"
                ? res.json(result)
                : res.status(400).json({
                    satus: 400,
                    message: "Error",
                });
        }
        // si une erreur est renvoyée
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: result,
        });
    };
    one = async (req, res) => {
        const result = await this.categoryrepository.selectOne(req.params);
        // req.params permet de recuperer les variables de route
        console.log(req.params);
        if (result instanceof Error) {
            // environnement de developpement
            // condition ? vrai : faux
            return process.env.NODE_ENV === "dev"
                ? res.json(result)
                : res.status(400).json({
                    satus: 400,
                    message: "Error",
                });
        }
        // si une erreur est renvoyée
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: result,
        });
    };
}
export default CategoryController;
