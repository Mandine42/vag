import "../assets/CSS/collect.css";

import MainCollect from "../component/home/MainCollect";
import PointCollectItem from "../component/home/PointCollectItem";
// récuperer la props data envoyée par le composant parent
const Collect = () => {
	return (
		<main id="main-collect">
			<MainCollect />
		</main>
	);
};

export default Collect;
