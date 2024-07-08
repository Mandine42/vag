import express from "express";
import CollectController from "../controller/collect_controller.js";
class CollectRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new CollectController().index);
        this.router.get("/:id", new CollectController().one);
        return this.router;
    };
}
export default CollectRouter;
