import CollectValidator from "../../validator/collect_validator.js";
class CollectValidatorMiddleware {
    // vérifier les contraintes de validation
    filter = async (req, res, next) => {
        // console.log("middleware");
        // valider la propriété body selon les contraintes de validation
        const validation = await new CollectValidator().validate(req.body);
        console.log(validation);
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
export default CollectValidatorMiddleware;
