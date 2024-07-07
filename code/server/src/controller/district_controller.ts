import type { Request, Response } from "express";
import DistrictRepository from "../repository/district_repository.js";

class DistrictController {
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		return res.send(await new DistrictRepository().selectAll());
	};
}

export default DistrictController;
