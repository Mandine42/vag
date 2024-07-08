import express from "express";
import ProductController from "../controller/product_controller.js";
class ProductRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new ProductController().index);
        // une route avec une variable de route; précédée d'un :
        this.router.get("/:id", new ProductController().one);
        return this.router;
    };
}
export default ProductRouter;
