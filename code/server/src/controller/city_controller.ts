import type { Request, Response } from "express";
import CityRepository from "../repository/city_repository.js";

class CityController {
	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		return res.send(await new CityRepository().selectAll());
	};
}

export default CityController;
