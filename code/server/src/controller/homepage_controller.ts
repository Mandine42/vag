import type { Request, Response } from "express";

class HomepageController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.status(200).json({
			message: "Welcome to VAG API",
		});
	};
}

export default HomepageController;
