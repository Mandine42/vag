import express, { type Request, type Response, type Router } from "express";
import ProductController from "../controller/product_controller.js";
import UserValidatorMiddleware from "../middleware/validator/user_validator_middleware.js";
import AuthorizationMiddleware from "../middleware/security/authorizationMiddleware.js";

class ProductRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new ProductController().index);
		// une route avec une variable de route; précédée d'un :
		this.router.get("/:id", new ProductController().one);
		//route pour créer un produit
		this.router.post(
			"/",
			new AuthorizationMiddleware().authorize(["admin", "user"]),
			new UserValidatorMiddleware().filter,
			new ProductController().create,
		);

		//route pour modifier un produit
		this.router.put("/:id", new ProductController().update);

		//route pour supprimer un produit
		this.router.delete("/:id", new ProductController().delete);
		return this.router;
	};
}

export default ProductRouter;
