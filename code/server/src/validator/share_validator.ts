import type Share from "../model/share.js";
import Joi, { type ValidationError } from "joi";

class ShareValidator {
	// valider les données d'un véhicule
	public async validate(data: Share): Promise<unknown | ValidationError> {
		// contraintes de validation
		// reprendre les proprités du model
		const constraints = Joi.object({
			id: Joi.number().positive().allow(),
			quantity: Joi.number().positive().required(),
			collect_datetime: Joi.date().required(),
			expiration: Joi.string().required(),
			product_id: Joi.number().positive().required(),
			product: Joi.object().allow(),
			collect_id: Joi.number().positive().required(),
			collect: Joi.object().allow(),
		});

		try {
			const validation = await constraints.validateAsync(data, {
				abortEarly: false,
			});

			return validation;
		} catch (error) {
			return error;
		}
	}
}

export default ShareValidator;
