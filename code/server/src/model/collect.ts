import type District from "./district.js";

type Collect = {
	id?: number;
	adress?: string;
	meeting_point?: string;
	district_id?: string;
	district?: District | unknown;
};

export default Collect;
