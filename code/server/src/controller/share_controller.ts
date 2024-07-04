import type { Request, Response } from "express";

class ShareController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.send("share controller");
	};
}

export default ShareController;
