import type { Request, Response } from "express";
import ProductRepository from "../repository/product_repository.js";

class ProductController {
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		return res.send(await new ProductRepository().selectAll());
	};
}

export default ProductController;
