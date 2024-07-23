import type Share from "./share.js";
import type User from "./user.js";

type UserShare = {
	id?: number;
	donor_id?: number;
	donor?: User | unknown;
	beneficiary_id?: number;
	beneficiary?: User | unknown;
	share_id?: number;
	share?: Share | unknown;
};

export default UserShare;
