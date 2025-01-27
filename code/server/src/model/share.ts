import type Collect from "./collect.js";
import type Product from "./product.js";
import type UserShare from "./user_share.js";

type Share = {
	id?: number;
	quantity?: number;
	collect_dateTime?: string;
	expiration?: string;
	product_id?: number;
	product?: Product | unknown;
	collect_id?: number;
	collect?: Collect | unknown;
};

export default Share;
