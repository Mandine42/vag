import type { Request, Response } from "express";
import CategoryDistrictRepository from "../repository/category_district_repository.js";

class CategoryDistrictController {
	private categorydistrictrepository: CategoryDistrictRepository =
		new CategoryDistrictRepository();
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.categorydistrictrepository.selectAll();
		// req.params permet de recuperer les variables de route

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
		const result = await this.categorydistrictrepository.selectOne(req.params);
		// req.params permet de recuperer les variables de route

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

export default CategoryDistrictController;
