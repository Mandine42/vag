import UserRepository from "../repository/user_share_repository.js";
class UserController {
    userrepository = new UserRepository();
    // méthodes appelées par le router
    index = async (req, res) => {
        const result = await this.userrepository.selectAll();
        // req.params permet de recuperer les variables de route
        // console.log(req.params);
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
        const result = await this.userrepository.selectOne(req.params);
        // req.params permet de recuperer les variables de route
        // console.log(req.params);
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
export default UserController;
