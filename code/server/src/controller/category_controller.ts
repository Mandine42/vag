import type { Request, Response } from "express";

class CategoryController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.send("category controller");
	};
}

export default CategoryController;
