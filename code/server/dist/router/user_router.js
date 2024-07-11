import express from "express";
import UserController from "../controller/user_controller.js";
class UserRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new UserController().index);
        this.router.get("/:id", new UserController().one);
        //route pour créer un user
        this.router.post("/", new UserController().create);
        return this.router;
    };
}
export default UserRouter;
