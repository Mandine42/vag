import express from "express";
import CollectController from "../controller/collect_controller.js";
class CollectRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/collect", new CollectController().index);
        return this.router;
    };
}
export default CollectRouter;
