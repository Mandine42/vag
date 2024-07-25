import type { Request, Response } from "express";
import ShareRepository from "../repository/share_repository.js";
import type User from "../model/user.js";
import argon2 from "argon2";
import Jwt from "jsonwebtoken";
import type { QueryResult } from "mysql2";

class ShareController {
	private sharerepository: ShareRepository = new ShareRepository();
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.sharerepository.selectAll();
		// req.params permet de recuperer les variables de route
		// console.log(req.params);

		// console.log(result);

		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error",
					});
		}
		// si une erreur est renvoyée
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: result,
		});
	};

	public one = async (req: Request, res: Response) => {
		const result = await this.sharerepository.selectOne(req.params);
		// req.params permet de recuperer les variables de route
		// console.log(req.params);
		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error",
					});
		}
		// si une erreur est renvoyée
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: result,
		});
	};

	public create = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.sharerepository.create(req.body);
		// req.body permet de recuperer les données contenues dans la proriété body de la requête HTTP

		// console.log(result);

		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error",
					});
		}
		// si une erreur est renvoyée
		return res.status(201).json({
			status: 201,
			message: "Share created",
			data: result,
		});
	};

	public update = async (req: Request, res: Response): Promise<Response> => {
		// regrouper l'identifiant contenu dans l'URL (re.params) avec les données de mise à jour contenues dans la propriété body de la requête HTTP
		//... (opérateur) permet de cloner les données/ const data regroupe toutes les infos (objet)
		const data = { ...req.body, id: req.params.id };
		// console.log(data);

		const result = await this.sharerepository.update(data);
		// req.params permet de recuperer les variables de route
		// console.log(req.params);

		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error",
					});
		}
		// si une erreur est renvoyée
		return res.status(200).json({
			status: 200,
			message: "Share updated",
			data: result,
		});
	};

	public delete = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.sharerepository.delete({
			id: req.params.id as unknown as number,
		});
		// req.params permet de recuperer les variables de route
		// console.log(req.params);

		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error",
					});
		}
		// si une erreur est renvoyée
		return res.status(200).json({
			status: 200,
			message: "Share deleted",
			data: result,
		});
	};

	public auth = async (req: Request, res: Response): Promise<Response> => {
		// recuperer l'utilisateur par son email

		const user: QueryResult | unknown =
			await this.sharerepository.getUserByEmail(req.body);
		// console.log(user);

		// si l'utilisateur n'existe pas
		if (user instanceof Error) {
			return res.status(400).json({
				status: 400,
				message: "error",
			});
		}

		// verification du mot de passe: comparer le mot de passe saisie avec le hash contenu dans la base de données
		const passwordIsValid: boolean = await argon2.verify(
			(user as User).password as string,
			req.body.password,
		);
		if (!passwordIsValid) {
			return res.status(403).json({
				status: 403,
				message: "forbidden",
			});
		}

		// génerer un JWT (jeton sécurisé)
		// le token est valide 30s
		const token = Jwt.sign(
			{
				user: user,
			},
			process.env.SECRET as string,
			{
				expiresIn: "2 days",
			},
		);

		// si l'utilisateur existe et si la réponse est correct
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: {
				token: token,
			},
		});
	};
}

export default ShareController;
