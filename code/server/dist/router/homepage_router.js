import express from "express";
import HomepageController from "../controller/homepage_controller.js";
class HomepageRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new HomepageController().index);
        return this.router;
    };
}
export default HomepageRouter;
