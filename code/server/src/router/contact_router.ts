import express, { type Request, type Response, type Router } from "express";
import ContactController from "../controller/contact_controller.js";
class ContactRouter {
	private router: Router = express.Router();

	public getRouter = (): Router => {
		// lister les routes associées au préfixe du router
		// une route est reliée à une URL et à méthode HTTP (GET, PUT, POST, DELETE)
		this.router.get("/", new ContactController().index);
		this.router.post("/", new ContactController().create);
		return this.router;
	};
}

export default ContactRouter;
