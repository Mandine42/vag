import type District from "./district.js";

type User = {
	id?: number;
	firstname?: string;
	lastname?: string;
	email?: string;
	phone_number?: string;
	adress?: string;
	registration_date?: string;
	isActive?: boolean;
	district_id?: string;
	district?: District | unknown;
};

export default User;
