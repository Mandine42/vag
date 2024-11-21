import Joi, { type ValidationError } from "joi";
import type User from "../model/user.js";

class UserValidator {
	// valider les données d'un user
	public async validate(data: User): Promise<unknown | ValidationError> {
		// contraintes de validation
		// reprendre les proprités du model
		const constraints = Joi.object({
			id: Joi.number().positive().optional(),
			firstname: Joi.string().required(),
			lastname: Joi.string().required(),
			email: Joi.string().required(),
			phone_number: Joi.string().required(),
			password: Joi.string().required(),
			adress: Joi.string().optional(),
			// registration_date: Joi.date().required(),
			// isActive: Joi.boolean().required(),
			// last_shared: Joi.string().required(),
			// district_id: Joi.number().positive().required(),
			district: Joi.object().optional(),
			// role_id: Joi.number().positive().required(),
			// role: Joi.object().optional(),
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

export default UserValidator;
