import express from "express";
import CategoryDistrictController from "../controller/category_district_controller.js";
class CategoryDistrictRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new CategoryDistrictController().index);
        return this.router;
    };
}
export default CategoryDistrictRouter;
