import type { Request, Response } from "express";
import ProductRepository from "../repository/product_repository.js";

class ProductController {
	private productrepository: ProductRepository = new ProductRepository();
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.productrepository.selectAll();
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
		const result = await this.productrepository.selectOne(req.params);
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

	public create = async (req: Request, res: Response): Promise<Response> => {
		console.log(req.body);

		const result = await this.productrepository.create(req.body);
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
			message: "Product created",
			data: result,
		});
	};
	public update = async (req: Request, res: Response): Promise<Response> => {
		// regrouper l'identifiant contenu dans l'URL (re.params) avec les données de mise à jour contenues dans la propriété body de la requête HTTP
		//... (opérateur) permet de cloner les données/ const data regroupe toutes les infos (objet)
		const data = { ...req.body, id: req.params.id };
		// console.log(data);

		const result = await this.productrepository.update(data);
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
			message: "Product updated",
			data: result,
		});
	};

	public delete = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.productrepository.delete({
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
			message: "Product deleted",
			data: result,
		});
	};
}

export default ProductController;
