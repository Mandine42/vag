import express from "express";
import ProductController from "../controller/product_controller.js";
import ProductValidatorMiddleware from "../middleware/validator/product_validator_middleware.js";
class ProductRouter {
    router = express.Router();
    getRouter = () => {
        // lister les routes associées au préfixe du router
        // une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
        this.router.get("/", new ProductController().index);
        // une route avec une variable de route; précédée d'un :
        this.router.get("/:id", new ProductController().one);
        //route pour créer un produit
        this.router.post("/", new ProductValidatorMiddleware().filter, new ProductController().create);
        //route pour modifier un produit
        this.router.put("/:id", new ProductController().update);
        //route pour supprimer un produit
        this.router.delete("/:id", new ProductController().delete);
        return this.router;
    };
}
export default ProductRouter;
