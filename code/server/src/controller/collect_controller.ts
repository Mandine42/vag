import type { Request, Response } from "express";
import CollectRepository from "../repository/collect_repository.js";

class CollectController {
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		return res.send(await new CollectRepository().selectAll());
	};
}

export default CollectController;
