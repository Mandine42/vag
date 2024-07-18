import Joi from "joi";
class ProductValidator {
    // valider les données d'un véhicule
    async validate(data) {
        // contraintes de validation
        // reprendre les proprités du model
        const constraints = Joi.object({
            id: Joi.number().positive().allow(),
            name: Joi.string().required(),
            description: Joi.string().allow(),
            other_product: Joi.string().allow(),
            category_id: Joi.number().positive().required(),
            category: Joi.object().allow(),
        });
        try {
            const validation = await constraints.validateAsync(data, {
                abortEarly: false,
            });
            return validation;
        }
        catch (error) {
            return error;
        }
    }
}
export default ProductValidator;
