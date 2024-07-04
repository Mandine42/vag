import express from "express";
import CategoryController from "../controller/category_controller.js";
class CategoryRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/category", new CategoryController().index);
        return this.router;
    };
}
export default CategoryRouter;
