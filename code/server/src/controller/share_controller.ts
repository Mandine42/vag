import type { Request, Response } from "express";
import ShareRepository from "../repository/share_repository.js";

class ShareController {
	private sharerepository: ShareRepository = new ShareRepository();
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.sharerepository.selectAll();
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
}

export default ShareController;
