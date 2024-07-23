import { describe, expect, it } from "vitest";
import type Product from "../../src/model/product";
import { ValidationError } from "joi";
import type Category from "../../src/model/category.js";
import ProductValidator from "../../src/validator/product_validator.js";
// créer une suite de test
describe("Product validator test suite", () => {
	// creer des fausses données
	const category: Category = {
		id: 2,
		name: "légumes",
	};

	const data: Product = {
		id: 1,
		name: "carotte",
		description: "violet",
		other_product: "",
		category_id: 2,
		category: category,
	};
	// sut: system ender test, methode ou fonction testée
	const sut: ProductValidator = new ProductValidator();

	// creer un  test (qui fonctionne)
	it("should returns true", async () => {
		// valeur attendu
		const expected = true;

		// comment obtenir la valeur attendue
		const actual = await sut.validate(data);

		// assertion (affirmation)
		// je m'attend à ce que ma fonction validate me renvoies true
		// toBeTruthy= bolleen
		// jest : assertion débute par to
		// chai : acces dierst à des méthodes d'assertions
		expect(actual).toBeTruthy();
	});
	// creer un  test (qui renvoie une erreur)
	it("should returns error", async () => {
		// données renvoyant une erreurs
		const falseData: Product = {
			...data,
			name: "aman!ne@56",
			description: "gd!!56",
			category_id: 0, // Utiliser un nombre pour category_id
		};

		// comment obtenir la valeur attendue
		const actual = await sut.validate(falseData);

		// assertion
		expect(actual).toBeInstanceOf(ValidationError);
	});
});
