import express from "express";
import NotFoundController from "../controller/not_found_controller.js";
class NotFoundRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new NotFoundController().index);
        return this.router;
    };
}
export default NotFoundRouter;
