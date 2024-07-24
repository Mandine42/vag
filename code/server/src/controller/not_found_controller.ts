import type { Request, Response } from "express";

class NotFoundController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.status(404).json({
			status: 404,
			message: "Not found VAG API",
		});
	};
}

export default NotFoundController;
