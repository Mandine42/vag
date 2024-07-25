import { describe, expect, it } from "vitest";
import type Role from "../../src/model/role";
import type User from "../../src/model/user";
import supertest, { type Response } from "supertest";
import Server from "../../src/core/server";
import jwt from "jsonwebtoken";
import type { Pool } from "mysql2/promise";
import MySQLService from "../../src/service/mysql_service";
import UserRepository from "../../src/repository/user_repository";

// // creer un groupe de test
describe("user controller test suite", async () => {
	// 	// route principale appelée par les tests
	const route = "/user";
	// créer un admin
	const role: Role = {
		id: 1,
		name: "admin",
	};
	// utilisateur qui existe dans la base
	const admin: User = {
		id: 1,
		email: "amandine.martin@gmail.com",
		password: "admin",
		role: role,
	};

	// créer un user
	const data: User = {
		id: 1,
		firstname: "Caroline",
		lastname: "Fort",
		email: `caroline.fort${Date.now()}@gmail.com`,
		phone_number: "0658745632",
		password: "user",
		adress: "80 rue belvédaire",
		registration_date: "2024-08-21",
		isActive: true,
		last_shared: "2024-09-14 12:30:00",
		district_id: 2,
		district: {},
		role_id: 2,
		role: {},
	};

	const token = jwt.sign(
		{
			user: admin,
		},
		process.env.SECRET as string,
		{
			expiresIn: "2 days",
		},
	);

	const getLastId = async () => {
		// suppression de l'enregistrement
		const connection: Pool = await new MySQLService().connect();
		const query = `
            SELECT user.id FROM ${process.env.MYSQL_DB}.user ORDER BY user.id DESC LIMIT 1;
			`;
		const results: User | unknown = await connection.execute(query);
		const lastId: User | unknown = ((results as User[]).shift() as []).shift();

		return lastId;

		// await new UserRepository().delete(lastId as User);
	};

	// 	// creer un test
	it.concurrent("should returns a status code with 200", async () => {
		// valeur attendue
		const expected = 200;

		// sut (system under test) qu'est-ce qu'on test ?
		const sut: Response = await supertest(new Server().createServer())
			.get(route)
			.auth(token, { type: "bearer" });

		const actual = sut.status;
		// console.log(sut.status);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should returns data", async () => {
		// valeur attendue
		const expected = 0;

		const sut: Response = await supertest(new Server().createServer())
			.get(route)
			.auth(token, { type: "bearer" });

		// console.log(sut);

		const actual = sut.body.data.length;

		// assertion
		expect(actual).toBeGreaterThan(expected);
	});

	it.concurrent("should create a new entry in database", async () => {
		// valeur attendue
		const route = "/user/register";
		const expected = 201;

		const sut: Response = await supertest(new Server().createServer())
			.post(route)
			.send(data);
		const actual = sut.status;

		console.log(actual);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should update database", async () => {
		// valeur attendue
		const lastId: User = (await getLastId()) as User;

		const route = `/user/${lastId.id}`;

		const expected = 200;

		const sut: Response = await supertest(new Server().createServer())
			.put(route)
			.auth(token, { type: "bearer" })
			//propiété body de la requête
			.send(data);
		const actual = sut.status;

		// console.log(sut);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should delete database", async () => {
		// valeur attendue
		const lastId: User = (await getLastId()) as User;
		const route = `/user/${lastId.id}`;
		const expected = 200;

		const sut: Response = await supertest(new Server().createServer())
			.delete(route)
			.auth(token, { type: "bearer" })
			//propiété body de la requête
			.send(data);
		const actual = sut.status;

		console.log(sut);

		// assertion
		expect(actual).toBe(expected);
	});
});
