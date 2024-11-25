import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormulaireDonsDate = () => {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm();
	// // uneNavigate permet de changer de route
	// const navigate = useNavigate();
	// // hook useState : permet de recharger visuelement le composant
	// const [share, setShare] = useState([]);

	// //hook useEffect : permet de déclencher des actions lors du cycle de vie d'un composant (affichage, mise à jour, desaffichage)
	// // [] : permet de déclencher des actions une unique fois, lors de l'affichage du composant
	// useEffect(() => {
	// 	// récuperer toous les quartiers
	// 	// .then: j'attends
	// 	selectAllShare().then((results) => setShare(results.data));
	// }, []);
	// const submit = (data) => {
	// 	console.log("Données soumises :", data);
	// 	// Ajoutez ici votre logique pour traiter les données
	// };
	return (
		// <form id="signupForm" onSubmit={handleSubmit(submit)}>
		<fieldset class="date-heure">
			<legend id="quand">Quand je donne</legend>
			<label for="date" class="label-date">
				Date
			</label>
			<input type="date" id="date" name="date" required aria-required />
			<label for="time" class="label-date">
				Heure
			</label>
			<input type="time" id="time" name="time" />
			<button type="button" id="choose-time">
				Valider date et heure
			</button>

			<div id="date-time" />
		</fieldset>
		// </form>
	);
};

export default FormulaireDonsDate;
