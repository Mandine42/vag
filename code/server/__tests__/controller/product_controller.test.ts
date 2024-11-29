import { describe, expect, it } from "vitest";
import type Product from "../../src/model/product";
import supertest, { type Response } from "supertest";
import Server from "../../src/core/server";

// creer un groupe de test
describe("product controller test suite", async () => {
	// route principale appelée par les tests
	const route = "/product";

	// créer un produit

	const data: Product = {
		id: 1,
		name: "Camembert",
		description: "fromage coulant",
		other_product: "null",
		category_id: 5,
		category: {},
	};
	// creer un test
	it.concurrent("should returns a status code with 200", async () => {
		// valeur attendue
		const expected = 200;
		// sut (system under test) qu'est-ce qu'on test ?
		const sut: Response = await supertest(new Server().createServer()).get(
			route,
		);
		const actual = sut.status;
		// console.log(sut.status);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should returns data", async () => {
		// valeur attendue
		const minValue = 0;
		// sut (system under test) qu'est-ce qu'on test ?
		const sut: Response = await supertest(new Server().createServer()).get(
			route,
		);
		const actual = sut.body.data.length;
		// console.log(sut.body);

		// assertion
		expect(actual).toBeGreaterThan(minValue);
	});

	it.concurrent("should create a new entry in database", async () => {
		// valeur attendue
		const expected = 201;

		const sut: Response = await supertest(new Server().createServer())
			.post(route)
			.send(data);

		const actual = sut.status;
		// console.log(route);

		// assertion
		expect(actual).toBe(expected);
	});

	it.concurrent("should update database", async () => {
		// valeur attendue
		const route = "/product/18";
		const expected = 200;

		const sut: Response = await supertest(new Server().createServer())
			.put(route)
			//propiété body de la requête
			.send(data);
		const actual = sut.status;

		// console.log(sut);

		// assertion
		expect(actual).toBe(expected);
	});

	// it.concurrent("should delete database", async () => {
	// 	// valeur attendue
	// 	const route = "/product/18";
	// 	const expected = 200;

	// 	const sut: Response = await supertest(new Server().createServer())
	// 		.delete(route)
	// 		.send(data);

	// 	const actual = sut.status;

	// 	// console.log(sut);

	// 	// assertion
	// 	expect(actual).toBe(expected);
	// });
});
