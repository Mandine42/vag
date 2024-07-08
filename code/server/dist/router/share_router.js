import express from "express";
import shareController from "../controller/share_controller.js";
import ShareController from "../controller/share_controller.js";
class ShareRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new shareController().index);
        // une route avec une variable de route; précédée d'un :
        this.router.get("/:id", new ShareController().one);
        return this.router;
    };
}
export default ShareRouter;
