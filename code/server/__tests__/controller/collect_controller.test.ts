import { describe, expect, it } from "vitest";
import type Role from "../../src/model/role";
import type User from "../../src/model/user";
import type Collect from "../../src/model/collect";
import Jwt from "jsonwebtoken";
import supertest, { type Response } from "supertest";
import Server from "../../src/core/server";
import type { Pool } from "mysql2/promise";
import MySQLService from "../../src/service/mysql_service";
// creer un groupe de test
describe("collect controller test suite", async () => {
	// route principale appelée par les tests
	const route = "/collect";
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

	// créer une collect

	const data: Collect = {
		adress: "59 rue coquelicot",
		meeting_point: "kf",
		district_id: 5,
		district: {},
	};

	const token = Jwt.sign(
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
            SELECT collect.id FROM ${process.env.MYSQL_DB}.collect ORDER BY collect.id DESC LIMIT 1;
			`;
		const results: Collect | unknown = await connection.execute(query);
		const lastId: Collect | unknown = (
			(results as Collect[]).shift() as []
		).shift();
		// console.log(query);

		return lastId;
	};

	// // creer un test
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
		const expected = 201;

		const sut: Response = await supertest(new Server().createServer())
			.post(route)
			.auth(token, { type: "bearer" })
			//propiété body de la requête
			.send(data);
		const actual = sut.status;

		// console.log(sut);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should update database", async () => {
		// valeur attendue
		const lastId: Collect = (await getLastId()) as Collect;

		const route = `/collect/${lastId.id}`;

		const expected = 200;

		const sut: Response = await supertest(new Server().createServer())
			.put(route)
			.auth(token, { type: "bearer" })
			//propiété body de la requête
			.send({ ...data, adress: "5 rue des mmmm" });
		const actual = sut.status;

		console.log(lastId);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should delete database", async () => {
		// valeur attendue
		const lastId: Collect = (await getLastId()) as Collect;
		console.log(lastId);

		const route = `/collect/${lastId.id}`;
		const expected = 200;

		const sut: Response = await supertest(new Server().createServer())
			.delete(route)
			.auth(token, { type: "bearer" })
			//propiété body de la requête
			.send(data);
		const actual = sut.status;

		// console.log(lastId);

		// assertion
		expect(actual).toBe(expected);
	});
});
