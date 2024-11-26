import { Link, useNavigate } from "react-router-dom";
import "../../assets/CSS/formulaire-dons.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { selectAllProduct } from "../../service/product_api";

const FormDons = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const [product, setProduct] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(""); // Nouvelle variable d'état pour la catégorie sélectionnée

	// Récupération des produits au chargement du composant
	useEffect(() => {
		selectAllProduct().then((results) => setProduct(results.data));
	}, []);

	// Soumission du formulaire
	const submit = async (formData) => {
		console.log(formData);
		// Logique pour enregistrer les données
		// const results = await listProduct(formData);
		// if (results.status === 201) {
		//   window.sessionStorage.setItem("notice", "Votre don est enregistré");
		//   navigate("/voir-dons");
		// }
	};

	// Mise à jour de la catégorie sélectionnée
	const handleCategoryClick = (category) => {
		setSelectedCategory(category); // Met à jour la catégorie sélectionnée
		setValue("category_id", category); // Met à jour la catégorie dans le formulaire
	};

	// Filtrage des produits en fonction de la catégorie sélectionnée
	const filteredProducts = product.filter(
		(prod) => prod.category_id === selectedCategory,
	);

	return (
		<main>
			<section>
				<ul>
					<li>
						<Link to="/hygiene">
							<h3>Quels sont les aliments autorisés sur VAG ?</h3>
						</Link>
					</li>
				</ul>
			</section>

			<form id="signupForm" onSubmit={handleSubmit(submit)}>
				<fieldset>
					<legend id="share">Ce que je donne</legend>

					{/* Boutons de catégorie */}
					<button
						type="button"
						className="toggle-list btn-fruit"
						onClick={() => handleCategoryClick("Fruits")} // Lorsqu'on clique, on met à jour la catégorie sélectionnée
					>
						Fruits
					</button>
					<button
						type="button"
						className="toggle-list btn-vegetable"
						onClick={() => handleCategoryClick("Vegetables")}
					>
						Légumes
					</button>

					{/* Affichage des produits filtrés */}
					<div id="product-list" className="content-fruit">
						<div className="form-group">
							{filteredProducts.map((data) => (
								<p key={data.id}>
									<label>
										<input
											type="checkbox"
											value={data.id} // Valeur dynamique
											{...register("category_id", {
												required: "Les options sont obligatoires", // Validation
											})}
										/>
										{data.name} {/* Affichage du nom du produit */}
									</label>
								</p>
							))}
						</div>
					</div>

					<label htmlFor="pomme" className="label-fruit">
						{/* {...register("name")} */}
					</label>
					<select
						className="quantity quantity-fruit"
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

					<button
						type="button"
						className="toggle-list btn-keep"
						onClick={() => handleCategoryClick("Conserves")}
					>
						Conserves
					</button>

					<button
						type="button"
						className="toggle-list btn-vegetable"
						onClick={() => handleCategoryClick("Légumes")}
					>
						Légumes
					</button>

					<button
						type="button"
						className="toggle-list btn-fresh"
						onClick={() => handleCategoryClick("Produits frais")}
					>
						Produits frais
					</button>

					<button
						type="button"
						className="toggle-list btn-milk"
						onClick={() => handleCategoryClick("Produits laitiers")}
					>
						Produits laitiers
					</button>

					<button
						type="button"
						className="toggle-list btn-condiment"
						onClick={() => handleCategoryClick("Condiments")}
					>
						Condiments
					</button>

					<button
						type="button"
						className="toggle-list btn-legumineuse"
						onClick={() => handleCategoryClick("Légumineuse")}
					>
						Légumineuses
					</button>

					<button
						type="button"
						className="toggle-list btn-feculent"
						onClick={() => handleCategoryClick("Féculents")}
					>
						Féculents
					</button>

					<div className="form-group">
						<input
							type="checkbox"
							className="autre input-fruit"
							data-target="otherTextField2"
							name="msg_fruits[]"
							id="autre2"
							value="other2"
							{...register("msg_fruits")}
						/>
						<label htmlFor="autre2" className="label-fruit">
							Autre
						</label>
						<input
							type="text"
							id="otherTextField3"
							name="other_input3"
							placeholder="Veuillez préciser..."
							className="input-fresh"
							{...register("other_input3")}
						/>
					</div>

					<input
						type="checkbox"
						className="date-peremption date-peremption-fresh"
						id="datePeremptionCheckbox2"
						name="msg_fresh[]"
						value="date-peremption"
						{...register("msg_fresh")}
					/>
					<label htmlFor="datePeremptionCheckbox2">date</label>
					<input
						type="date"
						className="date-fresh"
						id="datePeremption2"
						name="date_input2"
						{...register("date_input2")}
					/>
					<br />
					<p>
						<input type="hidden" value="" {...register("id")} />
						<input type="submit" value="" />
					</p>

					<button type="button" id="validate-all">
						Voir ma sélection
					</button>
					<div id="selected-items" />
				</fieldset>
			</form>
		</main>
	);
};

export default FormDons;
