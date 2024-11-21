import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectAllDistrict } from "../../service/district_api.js";
import PointCollectItem from "../../component/home/PointCollectItem";

const MainCollect = () => {
	// console.log(data);

	// hook useState : permet de recharger visuelement le composant
	const [district, setDistrict] = useState([]);
	//hook useEffect : permet de déclencher des actions lors du cycle de vie d'un composant (affichage, mise à jour, desaffichage)
	// [] : permet de déclencher des actions une unique fois, lors de l'affichage du composant
	useEffect(() => {
		// récuperer toous les points de collect
		// .then: j'attends
		selectAllDistrict().then((results) => setDistrict(results.data));
	}, []);

	return (
		<main>
			<h1 id="collect">Points de collecte</h1>
			<h3 id="quartier">Sélectionne ton quartier</h3>
			{/* <PointCollectItem /> */}
			{/* 
			-map est l'unique boucle disponible dans le HTML de React 
			-accolades permettent de délimiter la patie HTML de la partie JS*/}
			{
				// boucle sur l'état (useState) ici district
				// item = chaque élement du tableau
				// props :permet de transmettre des données entre un composant parent et un composant enfant, equivaut à des attributs HTML
				district.map((item) => {
					return <PointCollectItem key={Math.random()} data={item} />;
				})
			}
		</main>
	);
};

export default MainCollect;
