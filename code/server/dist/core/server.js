import express from "express";
import http from "node:http";
class Server {
    // propriétés
    app = express();
    router = express.Router();
    // constructeur
    constructor() {
        this.app.use(this.router);
        this.getRoutes();
    }
    // methodes
    getRoutes = () => {
        this.router.get("/", (req, res) => {
            res.send("homepage  vag");
        });
    };
    createServer = () => {
        return http.createServer(this.app);
    };
}
export default Server;
