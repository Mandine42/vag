import Joi from "joi";
class ShareValidator {
    // valider les données d'un véhicule
    async validate(data) {
        // contraintes de validation
        // reprendre les proprités du model
        const constraints = Joi.object({
            id: Joi.number().positive().allow(),
            quantity: Joi.number().positive().required(),
            collect_dateTime: Joi.date().required(),
            expiration: Joi.string().required(),
            product_id: Joi.number().positive().required(),
            product: Joi.object().allow(),
            collect_id: Joi.number().positive().required(),
            collect: Joi.object().allow(),
            // user_share_id: Joi.number().positive().required(),
            // user_share: Joi.object().allow(),
            donor_id: Joi.number().positive().required(),
            donor: Joi.object().allow(),
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
export default ShareValidator;
