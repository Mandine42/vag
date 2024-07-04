import type { Request, Response } from "express";

class DistrictController {
	// méthodes appelées par le router
	public index = (req: Request, res: Response): Response => {
		return res.send("district controller");
	};
}

export default DistrictController;
