import MainCollect from "../component/home/MainCollect";
import "../assets/CSS/collect.css";
import { useEffect } from "react";
import { selectAllDistrict } from "../service/district_api";

const Collect = () => {
	//hook useEffect : permet de déclencher des actions lors du cycle de vie d'un composant (affichage, mise à jour, desaffichage)
	// [] : permet de déclencher des actions une unique fois, lors de l'affichage du composant
	useEffect(() => {
		// récuperer toous les points de collect
		selectAllDistrict();
	}, []);

	return (
		<>
			<MainCollect />
		</>
	);
};

export default Collect;
