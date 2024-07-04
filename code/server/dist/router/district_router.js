import express from "express";
import DistrictController from "../controller/district_controller.js";
class DistrictRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new DistrictController().index);
        return this.router;
    };
}
export default DistrictRouter;
