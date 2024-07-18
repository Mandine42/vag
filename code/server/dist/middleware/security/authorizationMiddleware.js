import jwt from "jsonwebtoken";
class AuthorizationMiddleware {
    // méthode de la liste des roles autorisés
    authorize = (roles) => {
        // console.log(roles);
        // retourner un middleware
        return (req, res, next) => {
            // console.log("hello");
            // recuperer le token contenu dans l'en-tête authorization
            const token = req.headers.authorization?.split(" ")[1];
            // ou
            // const token: string = (req.headers.authorization as string).split(" ")[1];
            // verifier la validité du token
            try {
                const verifyToken = jwt.verify(token, process.env.SECRET);
            }
            catch (error) {
                //si le token est invalide
                return res.status(401).json({
                    status: 401,
                    message: "Unauthorized",
                });
            }
            // récuperer le payload du token
            const data = jwt.decode(token);
            // console.log(data);
            // vérification des autorizations
            // if (data.user.role.name !== "admin") {
            // chercher le rôle de l'utilisateur dans la liste des rôles autorisés
            if (roles.indexOf(data.user.role.name) === -1) {
                return res.status(401).json({
                    status: 401,
                    message: "Unauthorized",
                });
            }
            // passer au middleware suivant
            next();
        };
    };
}
export default AuthorizationMiddleware;
