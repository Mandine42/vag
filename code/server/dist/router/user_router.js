import express from "express";
import UserController from "../controller/user_controller.js";
import UserValidatorMiddleware from "../middleware/validator/user_validator_middleware.js";
import AuthorizationMiddleware from "../middleware/security/authorizationMiddleware.js";
class UserRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new AuthorizationMiddleware().authorize(["admin"]), new UserController().index);
        this.router.get("/:id", new AuthorizationMiddleware().authorize(["admin"]), new UserController().one);
        //route pour créer un user
        this.router.post("/register", 
        // new AuthorizationMiddleware().authorize(["admin", "user"]),
        new UserValidatorMiddleware().filter, new UserController().register);
        this.router.post("/login", new AuthorizationMiddleware().authorize(["admin", "user"]), new UserController().login);
        this.router.post("/auth", new UserController().auth);
        //route pour modifier un user
        this.router.put("/:id", new AuthorizationMiddleware().authorize(["admin", "user"]), new UserController().update);
        // route pour supprimer un utilisateur
        this.router.delete("/:id", new AuthorizationMiddleware().authorize(["admin", "user"]), new UserController().delete);
        return this.router;
    };
}
export default UserRouter;
