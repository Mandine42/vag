import type User from "./user.js";

type UserShare = {
	id?: number;
	donor_id?: number;
	donor?: User | unknown;
	beneficiary_id?: number;
	beneficiary?: User | unknown;
};

export default UserShare;
