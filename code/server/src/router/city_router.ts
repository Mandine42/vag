import express, { type Request, type Response, type Router } from "express";
import CityController from "../controller/city_controller.js";

class CityRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new CityController().index);
		this.router.get("/:id", new CityController().one);
		return this.router;
	};
}

export default CityRouter;
