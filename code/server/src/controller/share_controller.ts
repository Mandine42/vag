import type { Request, Response } from "express";
import ShareRepository from "../repository/share_repository.js";

class ShareController {
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		return res.send(await new ShareRepository().selectAll());
	};
}

export default ShareController;
