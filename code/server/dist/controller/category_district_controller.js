import CategoryDistrictRepository from "../repository/category_district_repository.js";
class CategoryDistrictController {
    categorydistrictrepository = new CategoryDistrictRepository();
    // méthodes appelées par le router
    index = async (req, res) => {
        return res.send(await new CategoryDistrictRepository().selectAll());
    };
    one = async (req, res) => {
        const result = await this.categorydistrictrepository.selectOne(req.params);
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
export default CategoryDistrictController;
