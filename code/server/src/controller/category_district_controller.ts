import type { Request, Response } from "express";

class CategoryDistrictController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.send("category_district controller");
	};
}

export default CategoryDistrictController;
