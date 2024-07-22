import express, { type Request, type Response } from "express";
import ContactRepository from "../repository/contact_repository.js";
import type { QueryResult } from "mysql2";
import type User from "../model/user.js";
import argon2 from "argon2";
import Jwt from "jsonwebtoken";
class ContactController {
	// récuperation de les documents (table)
	public index = async (req: Request, res: Response): Promise<Response> => {
		const results = await new ContactRepository().findAll();

		console.log(results);

		return res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	};

	public create = async (req: Request, res: Response): Promise<Response> => {
		const results = await new ContactRepository().create(req.body);

		console.log(results);

		return res.status(200).json({
			status: 201,
			message: "Created",
		});
	};
}

export default ContactController;
