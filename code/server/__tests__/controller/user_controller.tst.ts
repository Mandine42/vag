// import { describe, expect, it } from "vitest";
// import type Role from "../../src/model/role";
// import type User from "../../src/model/user";
// import supertest, { type Response } from "supertest";
// import Server from "../../src/core/server";
// import jwt from "jsonwebtoken";

// // creer un groupe de test
// describe("user controller test suite", async () => {
// 	// route principale appelée par les tests
// 	const route = "/user";
// 	// créer un admin
// 	const role: Role = {
// 		id: 1,
// 		name: "admin",
// 	};
// 	// utilisateur qui existe dans la base
// 	const admin: User = {
// 		id: 1,
// 		email: "amandine.martin@gmail.com",
// 		password: "admin",
// 		role: role,
// 	};

// 	// créer un user
// 	const data: User = {
// 		id: 1,
// 		firstname: "Amandine",
// 		lastname: "Martin",
// 		email: "amandine.martin@gmail.com",
// 		phone_number: "0685469631",
// 		password: "admin",
// 		adress: "45 rue fleuri",
// 		registration_date: "2024-08-21",
// 		isActive: true,
// 		last_shared: "2024-09-14 12:30:00",
// 		district_id: 2,
// 		district: {},
// 		role_id: 1,
// 		role: {},
// 	};
// 	// creer un test
// 	it("should returns a status code with 200", async () => {
// 		// valeur attendue
// 		const expected = 200;
// 		// sut (system under test) qu'est-ce qu'on test ?
// 		const sut: Response = await supertest(new Server().createServer()).get(
// 			route,
// 		);
// 		const actual = sut.status;
// 		// console.log(sut.status);

// 		// assertion
// 		expect(actual).toBe(expected);
// 	});

// 	it("should returns data", async () => {
// 		// valeur attendue
// 		const minValue = 0;
// 		// sut (system under test) qu'est-ce qu'on test ?
// 		const sut: Response = await supertest(new Server().createServer()).get(
// 			route,
// 		);
// 		const actual = sut.body.data;
// 		console.log(sut.body);

// 		// assertion
// 		// expect(actual).toBeGreaterThan(minValue);
// 	});

// 	// it("should create a new entry in database", async () => {
// 	// 	// valeur attendue
// 	// 	const expected = 201;

// 	// 	// générer un token
// 	// 	const token = jwt.sign(
// 	// 		{
// 	// 			user: admin,
// 	// 		},
// 	// 		process.env.SECRET as string,
// 	// 		{
// 	// 			expiresIn: 30,
// 	// 		},
// 	// 	);
// 	// 	// console.log(token);
// 	// 	// sut
// 	// 	const sut: Response = await supertest(new Server().createServer())
// 	// 		.get(route)
// 	// 		.auth(token, { type: "bearer" })
// 	// 		//propiété body de la requête
// 	// 		.send(data);
// 	// 	const actual = sut.status;

// 	// 	// console.log(actual);

// 	// 	// assertion
// 	// 	expect(actual).toBe(expected);
// 	// });
// });
