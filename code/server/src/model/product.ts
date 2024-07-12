import type Category from "./category.js";

type Product = {
	id?: number;
	name?: string;
	description?: string;
	category_id?: string;
	category?: Category | unknown;
};

export default Product;
