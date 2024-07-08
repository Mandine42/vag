import express, { type Request, type Response, type Router } from "express";
import shareController from "../controller/share_controller.js";
import ShareController from "../controller/share_controller.js";

class ShareRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new shareController().index);
		// une route avec une variable de route; précédée d'un :
		this.router.get("/:id", new ShareController().one);
		return this.router;
	};
}

export default ShareRouter;
