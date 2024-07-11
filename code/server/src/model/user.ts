import type City from "./city.js";
import type District from "./district.js";
import type Share from "./share.js";

type User = {
	id?: number;
	firstname?: string;
	lastname?: string;
	email?: string;
	phone_number?: string;
	adress?: string;
	registration_date?: string;
	isActive?: boolean;
	last_Shared?: string;
	city_id?: string;
	city?: City | unknown;
	district_id?: string;
	district?: District | unknown;
	donors_share_id?: string;
	donors_share?: Share | unknown;
	beneficiaries_share_id?: string;
	beneficiaries_share?: Share | unknown;
};

export default User;
