import type District from "./district.js";
import type Share from "./share.js";

type Collect = {
	id?: number;
	adress?: string;
	name?: string;
	district_id?: number;
	district?: District | unknown;
	share_id?: number;
	share?: Share | unknown;
};

export default Collect;
