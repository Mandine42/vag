import express, { type Request, type Response, type Router } from "express";
import CategoryDistrictController from "../controller/category_district_controller.js";

class CategoryDistrictRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get(
			"/category_district",
			new CategoryDistrictController().index,
		);

		return this.router;
	};
}

export default CategoryDistrictRouter;
