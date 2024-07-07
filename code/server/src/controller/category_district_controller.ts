import type { Request, Response } from "express";
import CategoryDistrictRepository from "../repository/category_district_repository.js";

class CategoryDistrictController {
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		return res.send(await new CategoryDistrictRepository().selectAll());
	};
}

export default CategoryDistrictController;
