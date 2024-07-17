import express, { type Request, type Response, type Router } from "express";
import UserController from "../controller/user_controller.js";
import UserValidatorMiddleware from "../middleware/validator/user_validator_middleware.js";

class UserRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new UserController().index);

		this.router.get("/:id", new UserController().one);
		//route pour créer un user

		this.router.post(
			"/",
			new UserValidatorMiddleware().filter,
			new UserController().register,
		);

		this.router.post("/login", new UserController().login);

		//route pour modifier un user
		this.router.put("/:id", new UserController().update);
		// route pour supprimer un utilisateur
		this.router.delete("/:id", new UserController().delete);

		return this.router;
	};
}

export default UserRouter;
