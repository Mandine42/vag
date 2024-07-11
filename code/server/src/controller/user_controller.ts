import type { Request, Response } from "express";
import UserRepository from "../repository/user_repository.js";
class UserController {
	private userrepository: UserRepository = new UserRepository();
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.userrepository.selectAll();
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

	public one = async (req: Request, res: Response) => {
		const result = await this.userrepository.selectOne(req.params);
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
		console.log(req.body);

		const result = await this.userrepository.create(req.body);
		// req.body permet de recuperer les données contenues dans la proriété body de la requête HTTP

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
			message: "User created",
			data: result,
		});
	};
}

export default UserController;
