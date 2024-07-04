import type { Request, Response } from "express";

class CityController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.send("city controller");
	};
}

export default CityController;