import express, {
	type Router,
	type Express,
	type Request,
	type Response,
} from "express";

import http from "node:http";
import ProductRouter from "../router/product_router.js";
import CategoryRouter from "../router/category_router.js";
import DistrictRouter from "../router/district_router.js";
import CategoryDistrictRouter from "../router/category_district_router.js";
import CityRouter from "../router/city_router.js";
import CollectRouter from "../router/collect_router.js";
import ShareRouter from "../router/share_router.js";
import NotFoundRouter from "../router/not_found_router.js";
import HomepageRouter from "../router/homepage_router.js";
import UserRouter from "../router/user_router.js";
import cors from "cors";
import OriginMiddleware from "../middleware/security/originMiddleware.js";
import ContactRouter from "../router/contact_router.js";
class Server {
	// propriétés
	private app: Express = express();
	private router: Router = express.Router();
	// constructeur
	constructor() {
		// activer le midleware JSON pour toutes le routes, permet d'accéder à la propriété body de la requête HTTP au format JSON.
		this.router.use(express.json());
		// dossier stockant les ressources publiques
		this.router.use(express.static(process.env.ASSETS_DIRECTORY as string));
		// gérer CORS
		this.router.use(
			cors({
				origin: process.env.ORIGINS?.split(","),
			}),
		);

		//vérifier l'origine de la requête
		this.router.use(new OriginMiddleware().check);

		// lier le router a l'application générale
		this.app.use(this.router);

		this.listRouters();
	}
	// methodes
	private listRouters = (): void => {
		this.router.use("/", new HomepageRouter().getRouter());

		this.router.use("/product", new ProductRouter().getRouter());

		this.router.use("/category", new CategoryRouter().getRouter());

		this.router.use("/district", new DistrictRouter().getRouter());

		this.router.use(
			"/category_district",
			new CategoryDistrictRouter().getRouter(),
		);

		this.router.use("/city", new CityRouter().getRouter());

		this.router.use("/collect", new CollectRouter().getRouter());

		this.router.use("/share", new ShareRouter().getRouter());

		this.router.use("/user", new UserRouter().getRouter());

		this.router.use("/contact", new ContactRouter().getRouter());

		this.router.use("*", new NotFoundRouter().getRouter());
	};

	public createServer = (): http.Server => {
		return http.createServer(this.app);
	};
}
export default Server;
