import type City from "./city.js";
import type District from "./district.js";
import type Role from "./role.js";
import type Share from "./share.js";

type User = {
	id?: number;
	firstname?: string;
	lastname?: string;
	email?: string;
	phone_number?: string;
	password?: string;
	adress?: string;
	district_id?: number;
	district?: District | unknown;
	registration_date?: Date;
	isActive?: boolean;
	last_shared?: Date;
	role_id?: number;
	role?: Role | unknown;
	donors_share_id?: string;
	donors_share?: Share | unknown;
	beneficiaries_share_id?: string;
	beneficiaries_share?: Share | unknown;
};

export default User;
