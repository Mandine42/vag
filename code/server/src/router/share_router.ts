import express, { type Request, type Response, type Router } from "express";
import shareController from "../controller/share_controller.js";
import ShareController from "../controller/share_controller.js";
import ShareValidatorMiddleware from "../middleware/validator/share_validator_middleware.js";

class ShareRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new shareController().index);
		// une route avec une variable de route; précédée d'un :
		this.router.get("/:id", new ShareController().one);
		//route pour créer un vehicule
		this.router.post(
			"/",
			new ShareValidatorMiddleware().filter,
			new shareController().create,
		);

		//route pour modifier un véhicule
		this.router.put("/:id", new ShareController().update);

		//route pour supprimer un véhicule
		this.router.delete("/:id", new ShareController().delete);

		return this.router;
	};
}

export default ShareRouter;
