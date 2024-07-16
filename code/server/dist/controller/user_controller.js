import UserRepository from "../repository/user_repository.js";
import argon2 from "argon2";
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
    register = async (req, res) => {
        // hacher le mot de passe
        const hash = await argon2.hash(req.body.password);
        // console.log(hash);
        // remplacer le mot de passe contenu dans le body dans la version hachée
        req.body = { ...req.body, password: hash };
        const result = await this.userrepository.register(req.body);
        if (result instanceof Error) {
            // environnement de developpement
            // condition ? vrai : faux
            return process.env.NODE_ENV === "dev"
                ? res.json(result)
                : res.status(400).json({
                    status: 400,
                    message: "Error",
                });
        }
        // si une erreur est renvoyée
        return res.status(201).json({
            status: 201,
            message: "User created",
        });
    };
    update = async (req, res) => {
        // regrouper l'identifiant contenu dans l'URL (re.params) avec les données de mise à jour contenues dans la propriété body de la requête HTTP
        //... (opérateur) permet de cloner les données/ const data regroupe toutes les infos (objet)
        const data = { ...req.body, id: req.params.id };
        // console.log(data);
        const result = await this.userrepository.update(data);
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
            message: "User updated",
            data: result,
        });
    };
    delete = async (req, res) => {
        const result = await this.userrepository.delete({
            id: req.params.id,
        });
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
            message: "User deleted",
            data: result,
        });
    };
}
export default UserController;
