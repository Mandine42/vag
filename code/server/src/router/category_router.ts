import express, { type Request, type Response, type Router } from "express";
import CategoryController from "../controller/category_controller.js";
import CityController from "../controller/city_controller.js";

class CategoryRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new CategoryController().index);
		this.router.get("/:id", new CategoryController().one);

		return this.router;
	};
}

export default CategoryRouter;
