import { Link } from "react-router-dom";
import { selectAllDistrict } from "../../service/district_api";
import { selectAllCollect } from "../../service/collect_api";

const PointCollectItem = ({ data }) => {
	return (
		<section className="quartier-collect">
			<Link to="" className="quartier-link">
				<h2>{data.district.name}</h2>
			</Link>
			<article className="quartier-info">
				<h3>Mon point de collecte:</h3>
				<br />
				<p>{data.meeting_point}</p>
				<br />
				<p>{data.adress}</p>
			</article>
			<iframe
				src={data.iframe}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="plan"
				title="carte-quartier"
			/>
		</section>
	);
};

export default PointCollectItem;
