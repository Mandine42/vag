import express, { type Request, type Response, type Router } from "express";
import ProductController from "../controller/product_controller.js";

class ProductRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new ProductController().index);

		return this.router;
	};
}

export default ProductRouter;
