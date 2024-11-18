import express, { type Request, type Response, type Router } from "express";
import CollectController from "../controller/collect_controller.js";
import CollectValidatorMiddleware from "../middleware/validator/collect_validator_middleware.js";
import AuthorizationMiddleware from "../middleware/security/authorizationMiddleware.js";

class CollectRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get(
			"/",
			new AuthorizationMiddleware().authorize(["admin", "user"]),
			new CollectController().index,
		);
		this.router.get(
			"/:id",
			new AuthorizationMiddleware().authorize(["admin"]),
			new CollectController().one,
		);
		//route pour créer
		this.router.post(
			"/",
			new AuthorizationMiddleware().authorize(["admin", "user"]),
			new CollectValidatorMiddleware().filter,
			new CollectController().create,
		);
		// this.router.post("/auth", new CollectController().auth);

		//route pour modifier
		this.router.put(
			"/:id",
			new AuthorizationMiddleware().authorize(["admin"]),
			new CollectController().update,
		);

		//route pour supprimer
		this.router.delete(
			"/:id",
			new AuthorizationMiddleware().authorize(["admin"]),
			new CollectController().delete,
		);
		return this.router;
	};
}

export default CollectRouter;
