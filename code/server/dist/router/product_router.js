import express from "express";
import ProductController from "../controller/product_controller.js";
class ProductRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new ProductController().index);
        return this.router;
    };
}
export default ProductRouter;