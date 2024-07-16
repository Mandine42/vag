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
	passeword?: string;
	adress?: string;
	registration_date?: string;
	isActive?: boolean;
	last_Shared?: string;
	city_id?: number;
	city?: City | unknown;
	district_id?: number;
	district?: District | unknown;
	donors_share_id?: string;
	donors_share?: Share | unknown;
	beneficiaries_share_id?: string;
	beneficiaries_share?: Share | unknown;
	role_id?: number;
	role?: Role | unknown;
};

export default User;
