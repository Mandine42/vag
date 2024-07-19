import type Collect from "../model/collect.js";
import Joi, { type ValidationError } from "joi";

class CollectValidator {
	// valider les données d'un véhicule
	public async validate(data: Collect): Promise<unknown | ValidationError> {
		// contraintes de validation
		// reprendre les proprités du model
		const constraints = Joi.object({
			id: Joi.number().positive().allow(),
			adress: Joi.string().required(),
			meeting_point: Joi.string().required(),
			district_id: Joi.number().positive().required(),
			district: Joi.object().allow(),
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

export default CollectValidator;
