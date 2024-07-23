import { describe, expect, it } from "vitest";
import type Product from "../../src/model/product.js";
import type Category from "../../src/model/category.js";
import type City from "../../src/model/city.js";
import type CategoryDistrict from "../../src/model/category_district.js";
import type District from "../../src/model/district.js";
import type Collect from "../../src/model/collect.js";
import type Role from "../../src/model/role.js";
import type Share from "../../src/model/share.js";
import ShareValidator from "../../src/validator/share_validator.js";
import Joi, { ValidationError } from "joi";
import type UserShare from "../../src/model/user_share.js";
// créer une suite de test
describe("Share validator test suite", () => {
	// creer des fausses données
	const category: Category = {
		id: 2,
		name: "légumes",
	};
	const product: Product = {
		id: 1,
		name: "carotte",
		description: "violet",
		other_product: "",
		category_id: 2,
		// category: category,
		category: {},
	};
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
	const collect: Collect = {
		id: 1,
		adress: "25 rue nenufar",
		meeting_point: "",
		district_id: 1,
		// district: district,
		district: {},
	};
	const role: Role = {
		id: 2,
		name: "user",
	};

	const userShare: UserShare = {
		id: 1,
		beneficiary: {},
		beneficiary_id: 1,
		donor: {},
		donor_id: 1,
	};

	const data: Share = {
		id: 1,
		quantity: 2,
		collect_dateTime: "2024-12-05 08:30:00",
		expiration: "",
		product_id: 5,
		product: product,
		collect_id: 8,
		collect: collect,
		user_share_id: 2,
		user_share: userShare,
	};
	// sut: system ender test, methode ou fonction testée
	const sut: ShareValidator = new ShareValidator();

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
		const falseData = {
			...data,
			quantity: -1,
			expiration: "25ho5",
			product: "25d7:h8",
		};

		// comment obtenir la valeur attendue
		const actual = await sut.validate(falseData);

		// assertion
		expect(actual).toBeInstanceOf(ValidationError);
	});
});
