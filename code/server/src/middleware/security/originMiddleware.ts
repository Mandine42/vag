import type { NextFunction, Request, Response } from "express";
import { log } from "node:console";

// cette classe va service a sécurisé les get des api
class OriginMiddleware {
	public check = (req: Request, res: Response, next: NextFunction) => {
		// recuperer le protocol Http https
		const protocol: string = req.protocol;

		//récupere l'hôte*
		const host = req.get("host");

		//récupérer l'origine
		// const origin: string = ${protocol}://${host};
		const origin: string = req.get("origin") as string;

		// liste des origines autorisées
		const listOrigins: string[] = (process.env.ORIGINS as string).split(",");
		// console.log(listOrigins);

		// console.log(host, origin, listOrigins);
		// console.log(${protocol}://${req.get("host")});

		// console.log(req.get("origin"));

		// vérifier la présence de l'origine dans la liste
		if (
			// listOrigins.indexOf(origin) === -1
			listOrigins.indexOf(req.get("origin") as string) === -1 &&
			origin !== undefined
			// &&
			// host !== "localhost" &&
			// host !== "127.0.0.1"
		) {
			return res.status(403).json({
				status: 403,
				message: "Forbidden ici",
			});
		}

		// passer au middleware suivant
		next();
	};
}

export default OriginMiddleware;
