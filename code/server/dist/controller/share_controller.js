import ShareRepository from "../repository/share_repository.js";
class ShareController {
    sharerepository = new ShareRepository();
    // méthodes appelées par le router
    index = async (req, res) => {
        const result = await this.sharerepository.selectAll();
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
        const result = await this.sharerepository.selectOne(req.params);
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
    create = async (req, res) => {
        console.log(req.body);
        const result = await this.sharerepository.create(req.body);
        // req.body permet de recuperer les données contenues dans la proriété body de la requête HTTP
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
        return res.status(201).json({
            status: 201,
            message: "Share created",
            data: result,
        });
    };
    update = async (req, res) => {
        // regrouper l'identifiant contenu dans l'URL (re.params) avec les données de mise à jour contenues dans la propriété body de la requête HTTP
        //... (opérateur) permet de cloner les données/ const data regroupe toutes les infos (objet)
        const data = { ...req.body, id: req.params.id };
        // console.log(data);
        const result = await this.sharerepository.update(data);
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
            message: "Share updated",
            data: result,
        });
    };
    delete = async (req, res) => {
        const result = await this.sharerepository.delete({
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
            message: "Share deleted",
            data: result,
        });
    };
}
export default ShareController;
