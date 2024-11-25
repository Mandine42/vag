import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { selectAllProduct } from "../../service/product_api";

const FormulaireProduits = ({ data }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// uneNavigate permet de changer de route
	const navigate = useNavigate();
	// hook useState : permet de recharger visuelement le composant
	const [product, setProduct] = useState([]);

	//hook useEffect : permet de déclencher des actions lors du cycle de vie d'un composant (affichage, mise à jour, desaffichage)
	// [] : permet de déclencher des actions une unique fois, lors de l'affichage du composant
	useEffect(() => {
		// récuperer toous les points de collect
		// .then: j'attends
		selectAllProduct().then((results) => setProduct(results.data));
	}, []);
	const submit = (data) => {
		console.log("Données soumises :", data);
		// Ajoutez ici votre logique pour traiter les données
	};
	return (
		<form id="signupForm" onSubmit={handleSubmit(submit)}>
			<div id="fruit-list" class="content-fruit">
				<div class="form-group">
					<input
						type="checkbox"
						{...register("name")}
						id="pomme"
						name="msg_fruits[]"
						value="pomme"
						class="input-fruit"
					/>
					<label htmlFor="pomme" class="label-fruit">
						Pomme
					</label>
					<select
						class="quantity quantity-fruit"
						id="quantitySelect33"
						name="quantity33"
					>
						<option value="Non spécifiée">Quantité</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
				</div>
				{/* {product.map((item) => {
					return <FormulaireProduits key={item.id} data={item} />;
				})} */}
			</div>
		</form>
	);
};
export default FormulaireProduits;
