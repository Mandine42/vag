import type { Request, Response } from "express";

class NotFoundController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.send("not found - GET");
	};
}

export default NotFoundController;
