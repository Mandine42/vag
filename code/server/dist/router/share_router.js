import express from "express";
import shareController from "../controller/share_controller.js";
class ShareRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new shareController().index);
        return this.router;
    };
}
export default ShareRouter;
