import express, { type Request, type Response, type Router } from "express";
import ProductController from "../controller/product_controller.js";

class ProductRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new ProductController().index);
		// une route avec une variable de route; précédée d'un :
		this.router.get("/:id", new ProductController().one);
		//route pour créer un vehicule
		this.router.post("/", new ProductController().create);

		//route pour modifier un véhicule
		this.router.put("/:id", new ProductController().update);
		return this.router;
	};
}

export default ProductRouter;
