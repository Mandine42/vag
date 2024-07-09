import type District from "./district.js";
import type Product from "./product.js";

type Share = {
	id?: number;
	quantity?: number;
	collect_dateTime?: string;
	expiration?: string;
	product_id?: number;
	product?: Product | unknown;
	district_id?: number;
	district?: District | unknown;
};

export default Share;
