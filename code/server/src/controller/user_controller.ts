import type { Request, Response } from "express";

import argon2 from "argon2";
import { Pool, type QueryResult } from "mysql2";
import type User from "../model/user.js";
import UserRepository from "../repository/user_repository.js";
import jwt from "jsonwebtoken";
import SimpleCrypto from "simple-crypto-js";

class UserController {
	private userrepository: UserRepository = new UserRepository();

	// méthodes appelées par le router
	public index = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.userrepository.selectAll();
		// req.params permet de recuperer les variables de route
		// console.log(req.params);
		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error1",
					});
		}
		// si une erreur est renvoyée
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: result,
		});
	};

	public one = async (req: Request, res: Response) => {
		const result = await this.userrepository.selectOne(req.params);
		// req.params permet de recuperer les variables de route
		// console.log(req.params);
		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error2",
					});
		}
		// si une erreur est renvoyée
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: result,
		});
	};

	public register = async (req: Request, res: Response): Promise<Response> => {
		// hacher le mot de passe
		const hash = await argon2.hash(req.body.password);

		// console.log(hash);
		// remplacer le mot de passe contenu dans le body dans la version hachée
		req.body = { ...req.body, password: hash };

		const result = await this.userrepository.register(req.body);
		// console.log(result);

		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						status: 400,
						message: "Error",
					});
		}
		// si une erreur est renvoyée
		return res.status(201).json({
			status: 201,
			message: "User created",
		});
	};

	public update = async (req: Request, res: Response): Promise<Response> => {
		// regrouper l'identifiant contenu dans l'URL (re.params) avec les données de mise à jour contenues dans la propriété body de la requête HTTP
		//... (opérateur) permet de cloner les données/ const data regroupe toutes les infos (objet)
		const data = { ...req.body, id: req.params.id };
		// console.log(data);

		const result = await this.userrepository.update(data);
		// req.params permet de recuperer les variables de route
		// console.log(req.params);

		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error",
					});
		}
		// si une erreur est renvoyée
		return res.status(200).json({
			status: 200,
			message: "User updated",
			data: result,
		});
	};

	public delete = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.userrepository.delete({
			id: req.params.id as unknown as number,
		});
		// req.params permet de recuperer les variables de route
		// console.log(req.params);

		if (result instanceof Error) {
			// environnement de developpement
			// condition ? vrai : faux
			return process.env.NODE_ENV === "dev"
				? res.json(result)
				: res.status(400).json({
						satus: 400,
						message: "Error",
					});
		}
		// si une erreur est renvoyée
		return res.status(200).json({
			status: 200,
			message: "User deleted",
			data: result,
		});
	};

	public login = async (req: Request, res: Response): Promise<Response> => {
		// recuperer l'utilisateur par son email

		const user: QueryResult | unknown =
			await this.userrepository.getUserByEmail(req.body);
		// console.log(user);

		// // si l'utilisateur n'existe pas
		if (user instanceof Error) {
			return res.status(400).json({
				status: 400,
				message: "error3",
			});
		}

		// // verification du mot de passe: comparer le mot de passe saisie avec le hash contenu dans la base de données
		const passwordIsValid: boolean = await argon2.verify(
			(user as User).password as string,
			req.body.password,
		);

		if (!passwordIsValid) {
			return res.status(403).json({
				status: 403,
				message: "forbidden",
			});
		}
		// crypter le mot de passe pour le stocker côté client
		// generer une partie de la clé de decryptage aléatoire
		const randomKey = SimpleCrypto.default.generateRandom();

		// clé complète de decryptage : partie aléatoire + partie stocké dans la variable d'environnement
		const key = `${randomKey}${process.env.KEY}`;

		// générer le cryptage
		const simpleCrypto = new SimpleCrypto.default(key);

		// crypter le mot de passe
		const passwordEncrypt = simpleCrypto.encrypt(req.body.password);
		// console.log(passwordEncrypt);

		// ajouter la clé aléatoite + le mot de passe crypté a l'utilisateur
		(user as User).key = randomKey;
		(user as User).password = passwordEncrypt;

		// si l'utilisateur existe et si la réponse est correct
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: user,
		});
	};

	public auth = async (req: Request, res: Response): Promise<Response> => {
		// recuperer l'utilisateur par son email

		const user: QueryResult | unknown =
			await this.userrepository.getUserByEmail(req.body);
		// console.log(user);

		// si l'utilisateur n'existe pas
		if (user instanceof Error) {
			return res.status(400).json({
				status: 400,
				message: "error",
			});
		}

		// récupérer une partie de la clé de decryptage aléatoire
		const randomKey = req.body.key;

		// clé complète de decryptage
		const key = `${randomKey}${process.env.KEY}`;

		// générer le cryptage
		const simpleCrypto = new SimpleCrypto.default(key);

		// décrypter le mot de passe
		const passwordDecrypt = simpleCrypto.decrypt(req.body.password);

		// verification du mot de passe: comparer le mot de passe saisie avec le hash contenu dans la base de données
		const passwordIsValid: boolean = await argon2.verify(
			(user as User).password as string,
			passwordDecrypt as string,
		);

		if (!passwordIsValid) {
			return res.status(403).json({
				status: 403,
				message: "forbidden",
			});
		}

		// génerer un JWT (jeton sécurisé)
		// le token est valide 30s
		const token = jwt.sign(
			{
				user: user,
			},
			process.env.SECRET as string,
			{
				expiresIn: "2 days",
			},
		);

		// si l'utilisateur existe et si la réponse est correct
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: {
				token: token,
			},
		});
	};
}

export default UserController;
