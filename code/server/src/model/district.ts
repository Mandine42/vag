import type Category_district from "./category_district.js";
import type City from "./city.js";

type District = {
	id?: number;
	name?: string;
	adress?: string;
	meeting_point?: string;
	city_id?: string;
	city?: City | unknown;
	category_district_id?: string;
	category_district?: Category_district | unknown;
};

export default District;
