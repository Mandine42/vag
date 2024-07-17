import type { NextFunction, Request, Response } from "express";

import type Joi from "joi";
import { type ValidationError, ValidationErrorItem } from "joi";
import UserValidator from "../../validator/user_validator.js";

class UserValidatorMiddleware {
	// vérifier les contraintes de validation

	public filter = async (req: Request, res: Response, next: NextFunction) => {
		// console.log("middleware");
		// valider la propriété body selon les contraintes de validation
		const validation = await new UserValidator().validate(req.body);
		// console.log(validation);
		// si une erreur de validation est renvoyée
		if (validation instanceof Error) {
			return res.status(400).json({
				status: 400,
				message: "Error",
				data: (validation as ValidationError).details.map(
					(value: Joi.ValidationErrorItem) => value.message,
				),
			});
		}

		// passer au middleware
		next();
	};
}

export default UserValidatorMiddleware;
