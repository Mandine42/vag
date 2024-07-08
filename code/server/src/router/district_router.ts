import express, { type Request, type Response, type Router } from "express";
import DistrictController from "../controller/district_controller.js";

class DistrictRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new DistrictController().index);
		// une route avec une variable de route; précédée d'un :
		this.router.get("/:id", new DistrictController().one);

		return this.router;
	};
}

export default DistrictRouter;
