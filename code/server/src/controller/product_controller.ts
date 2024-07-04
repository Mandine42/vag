import type { Request, Response } from "express";

class ProductController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.send("product controller");
	};
}

export default ProductController;
