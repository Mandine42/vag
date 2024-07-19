// cette classe va service a sécurisé les get des api
class OriginMiddleware {
    check = (req, res, next) => {
        // recuperer le protocol Http https
        const protocol = req.protocol;
        //récupere l'hôte*
        const host = req.get("host");
        //récupérer l'origine
        // const origin: string = ${protocol}://${host};
        const origin = req.get("origin");
        // liste des origines autorisées
        const listOrigins = process.env.ORIGINS.split(",");
        // console.log(listOrigins);
        // console.log(host, origin, listOrigins);
        // console.log(${protocol}://${req.get("host")});
        console.log(req.get("origin"));
        // vérifier la présence de l'origine dans la liste
        if (
        // listOrigins.indexOf(origin) === -1
        listOrigins.indexOf(req.get("origin")) === -1 &&
            origin !== undefined
        // &&
        // host !== "localhost" &&
        // host !== "127.0.0.1"
        ) {
            return res.status(403).json({
                status: 403,
                message: "Forbidden ici",
            });
        }
        // passer au middleware suivant
        next();
    };
}
export default OriginMiddleware;
