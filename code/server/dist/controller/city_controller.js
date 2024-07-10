import CityRepository from "../repository/city_repository.js";
class CityController {
    cityrepository = new CityRepository();
    // méthodes appelées par le router
    index = async (req, res) => {
        const result = await this.cityrepository.selectAll();
        // req.params permet de recuperer les variables de route
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
        const result = await this.cityrepository.selectOne(req.params);
        // req.params permet de recuperer les variables de route
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
export default CityController;
