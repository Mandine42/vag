import express from "express";
import shareController from "../controller/share_controller.js";
import ShareController from "../controller/share_controller.js";
import ShareValidatorMiddleware from "../middleware/validator/share_validator_middleware.js";
import AuthorizationMiddleware from "../middleware/security/authorizationMiddleware.js";
class ShareRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new AuthorizationMiddleware().authorize(["admin"]), new shareController().index);
        // une route avec une variable de route; précédée d'un :
        this.router.get("/:id", new AuthorizationMiddleware().authorize(["admin"]), new ShareController().one);
        //route pour créer un vehicule
        this.router.post("/", new AuthorizationMiddleware().authorize(["admin", "user"]), new ShareValidatorMiddleware().filter, new shareController().create);
        //route pour modifier un share
        this.router.put("/:id", new AuthorizationMiddleware().authorize(["admin", "user"]), new ShareController().update);
        //route pour supprimer un share
        this.router.delete("/:id", new AuthorizationMiddleware().authorize(["admin", "user"]), new ShareController().delete);
        return this.router;
    };
}
export default ShareRouter;
