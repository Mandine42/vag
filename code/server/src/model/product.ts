import type Category from "./category.js";

type Product = {
	id?: number;
	name?: string;
	description?: string;
	other_product?: string;
	category_id?: number;
	category?: Category | unknown;
};

export default Product;
