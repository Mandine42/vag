import { describe, expect, it } from "vitest";
import type District from "../../src/model/district.js";
import type City from "../../src/model/city.js";
import type CategoryDistrict from "../../src/model/category_district.js";
import type Role from "../../src/model/role.js";
import type User from "../../src/model/user.js";
import UserValidator from "../../src/validator/user_validator.js";
import { ValidationError } from "joi";

// créer une suite de test
describe("User validator test suite", () => {
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
	const role: Role = {
		id: 2,
		name: "user",
	};

	const data: User = {
		id: 1,
		firstname: "Mathieu",
		lastname: "Morin",
		email: "mathieu.martin@gmail.com",
		phone_number: "0685469631",
		password: "user",
		adress: "45 rue fleuri",
		registration_date: "2024-08-21",
		isActive: true,
		last_shared: "2024-09-14 12:30:00",
		district_id: 2,
		district: district,
		role_id: 2,
		role: role,
	};
	// sut: system ender test, methode ou fonction testée
	const sut: UserValidator = new UserValidator();

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
			name: "a2",
			email: "rne58!@.com",
			phone_number: "25d7:h8",
		};

		// comment obtenir la valeur attendue
		const actual = await sut.validate(falseData);

		// assertion
		expect(actual).toBeInstanceOf(ValidationError);
	});
});
