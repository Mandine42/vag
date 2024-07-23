import { describe, expect, it } from "vitest";
import type City from "../../src/model/city";
import type CategoryDistrict from "../../src/model/category_district";
import type District from "../../src/model/district";
import type Collect from "../../src/model/collect";
import CollectValidator from "../../src/validator/collect_validator.js";
import { ValidationError } from "joi";
describe("Collect validator test suite", () => {
	// creer des fausses données

	const city: City = {
		id: 1,
		name: "Montreuil",
	};
	const category_district: CategoryDistrict = {
		id: 3,
		name: "district",
	};
	const district: District = {
		id: 1,
		name: "district",
		adress: "5 rue petit",
		meeting_point: "",
		city_id: 1,
		city: city,
		category_district_id: 5,
		category_district: category_district,
	};
	const data: Collect = {
		id: 1,
		adress: "25 rue nenufar",
		meeting_point: "",
		district_id: 1,
		district: district,
	};

	// sut: system ender test, methode ou fonction testée
	const sut: CollectValidator = new CollectValidator();

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
		// données renvoyant une erreur
		const falseData: Collect = {
			...data,
			adress: undefined, // Données invalides pour l'adresse
			meeting_point: undefined, // Données invalides pour le point de rencontre
		};

		// comment obtenir la valeur attendue
		const actual = await sut.validate(falseData);

		// assertion
		expect(actual).toBeInstanceOf(ValidationError);
	});
});
