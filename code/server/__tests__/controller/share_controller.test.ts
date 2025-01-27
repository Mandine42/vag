import { describe, expect, it } from "vitest";
import type Role from "../../src/model/role";
import type Share from "../../src/model/share";
import type User from "../../src/model/user";
import supertest, { type Response } from "supertest";
import Server from "../../src/core/server.ts";
import jwt from "jsonwebtoken";
import type UserShare from "../../src/model/user_share.ts";

// creer un groupe de test
describe("share controller test suite", async () => {
	// route principale appelée par les tests
	const route = "/share";
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

	// créer une share

	const data: Share = {
		id: 1,
		quantity: 5,
		collect_dateTime: "2020-10-12 09:30:00",
		expiration: "2022-10-15",
		product_id: 6,
		product: {},
		collect_id: 9,
		collect: {},
	};

	const userShare: UserShare = {
		donor_id: 1,
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
			.send({ ...data, donor_id: userShare.donor_id });
		const actual = sut.status;

		// console.log(sut);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should update database", async () => {
		// valeur attendue
		const route = "/share/18";
		const expected = 200;

		const sut: Response = await supertest(new Server().createServer())
			.put(route)
			.auth(token, { type: "bearer" })
			//propiété body de la requête
			.send({ ...data, donor_id: userShare.donor_id });
		const actual = sut.status;

		// console.log(sut);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should delete database", async () => {
		// valeur attendue
		const route = "/share/18";
		const expected = 200;

		const sut: Response = await supertest(new Server().createServer())
			.delete(route)
			.auth(token, { type: "bearer" })
			//propiété body de la requête
			.send({ ...data, donor_id: userShare.donor_id });
		const actual = sut.status;

		// console.log(sut);

		// assertion
		expect(actual).toBe(expected);
	});
});
