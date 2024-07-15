import ShareValidator from "../../validator/share_validator.js";
class VehiculeValidatorMiddleware {
    // vérifier les contraintes de validation
    filter = async (req, res, next) => {
        // console.log("middleware");
        // valider la propriété body selon les contraintes de validation
        const validation = await new ShareValidator().validate(req.body);
        // console.log(validation);
        // si une erreur de validation est renvoyée
        if (validation instanceof Error) {
            return res.status(400).json({
                status: 400,
                message: "Error",
                data: validation.details.map((value) => value.message),
            });
        }
        // passer au middleware
        next();
    };
}
export default VehiculeValidatorMiddleware;
