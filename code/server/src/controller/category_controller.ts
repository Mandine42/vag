import type { Request, Response } from "express";
import CategoryRepository from "../repository/category_repository.js";

class CategoryController {
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		return res.send(await new CategoryRepository().selectAll());
	};
}

export default CategoryController;
