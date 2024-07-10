import type User from "./user.js";

type UserShare = {
	id?: number;
	donor_id?: string;
	donor?: User | unknown;
	beneficiary_id?: string;
	beneficiary?: User | unknown;
};

export default UserShare;
