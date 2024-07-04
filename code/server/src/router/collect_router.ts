import express, { type Request, type Response, type Router } from "express";
import CollectController from "../controller/collect_controller.js";

class CollectRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/collect", new CollectController().index);

		return this.router;
	};
}

export default CollectRouter;
