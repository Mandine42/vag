import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { selectAllDistrict } from "../../service/district_api";

const FormDonsQuartier = ({ formData }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// uneNavigate permet de changer de route
	const navigate = useNavigate();
	// hook useState : permet de recharger visuelement le composant
	const [district, setDistrict] = useState([]);

	//hook useEffect : permet de déclencher des actions lors du cycle de vie d'un composant (affichage, mise à jour, desaffichage)
	// [] : permet de déclencher des actions une unique fois, lors de l'affichage du composant
	useEffect(() => {
		// récuperer toous les quartiers
		// .then: j'attends
		selectAllDistrict().then((results) => setDistrict(results.data));
	}, []);
	const submit = (formData) => {
		console.log("Données soumises :", formData);
		// Ajoutez ici votre logique pour traiter les données
	};

	return (
		<form id="signupForm" onSubmit={handleSubmit(submit)}>
			<fieldset className="quartier">
				<legend id="donne">Où je donne</legend>
				<label htmlFor="quartier" className="label-quartier">
					Quartier
				</label>
				<select
					name="msg quartier"
					id="quartier"
					required
					aria-required="true"
					{...register("name")}
				>
					{/* <option value="">Selectionnez</option> */}
					{/* <optgroup label="Quartier">
						{/* {...register("name")} */}
					{/* <option value="Republique">Bas Montreuil - République</option>
						<option value="Chanzy">Etienne Marcel - Chanzy</option>
						<option value="Bobillot">Bobillot</option>
						<option value="La noue">La Noue - Clos français</option>
						<option value="Villiers">Villiers - Barbusse</option>
						<option value="Solidarite">Solidarité - Carnot</option>
						<option value="Centre-ville">Centre-ville</option>
						<option value="Beaumonts">Jean Moulin - Beaumonts</option>
						<option value="Ramenas">Ramenas - Léo Lagrange</option>
						<option value="Branly">Branly - Boissière</option>
						<option value="Bel air">Bel Air - Grands Pêchers - Renan</option>
						<option value="Signac">Signac - Murs à pêches</option>
						<option value="Ruffins">Ruffins - Théophile Sueur</option>
						<option value="Montreau">Montreau - Le Morillon</option> */}
					{/* </optgroup> */}
					type="text" id="quartier"
					<option value="">Selectionnez</option>
					{district.map((data) => (
						<option key={Math.random()} value={data.id}>
							{data.name}
						</option>
					))}
				</select>

				<button type="button" id="view-map">
					Voir la carte
				</button>

				<div id="selected-quartier" />
				<button type="button" id="validate-quartier">
					Valider mon quartier
				</button>
				<div id="map" />
			</fieldset>
		</form>
	);
};

export default FormDonsQuartier;
