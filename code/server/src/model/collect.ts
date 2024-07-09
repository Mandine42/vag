import type District from "./district.js";

type Collect = {
	id?: number;
	adress?: string;
	name?: string;
	district_id?: number;
	district?: District | unknown;
};

export default Collect;
