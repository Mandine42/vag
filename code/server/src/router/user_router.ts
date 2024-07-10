import express, { type Request, type Response, type Router } from "express";
import UserController from "../controller/user_controller.js";

class UserRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new UserController().index);

		this.router.get("/:id", new UserController().one);

		return this.router;
	};
}

export default UserRouter;