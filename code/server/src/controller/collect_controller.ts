import type { Request, Response } from "express";

class CollectController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.send("collect controller");
	};
}

export default CollectController;
