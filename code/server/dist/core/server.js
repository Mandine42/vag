import express from "express";
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
class Server {
    // propriétés
    app = express();
    router = express.Router();
    // constructeur
    constructor() {
        this.app.use(this.router);
        this.listRouters();
    }
    // methodes
    listRouters = () => {
        this.router.use("/", new HomepageRouter().getRouter());
        this.router.use("/product", new ProductRouter().getRouter());
        this.router.use("/category", new CategoryRouter().getRouter());
        this.router.use("/district", new DistrictRouter().getRouter());
        this.router.use("/category_district", new CategoryDistrictRouter().getRouter());
        this.router.use("/city", new CityRouter().getRouter());
        this.router.use("/collect", new CollectRouter().getRouter());
        this.router.use("/share", new ShareRouter().getRouter());
        this.router.use("*", new NotFoundRouter().getRouter());
    };
    createServer = () => {
        return http.createServer(this.app);
    };
}
export default Server;
