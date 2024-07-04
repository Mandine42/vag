import express, { type Request, type Response, type Router } from "express";
import DistrictController from "../controller/district_controller.js";

class DistrictRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/district", new DistrictController().index);

		return this.router;
	};
}

export default DistrictRouter;
