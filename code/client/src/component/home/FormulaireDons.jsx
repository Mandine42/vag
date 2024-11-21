import { useEffect, useState } from "react";
import { selectAllProduct } from "../../service/product_api";
import { Link } from "react-router-dom";
import FormulaireProduits from "./FormulaireProduits";
import "../../assets/CSS/formulaire-dons.css";
const FormulaireDons = () => {
	const [category, setCategory] = useState("Fruits");
	const [product, setProduct] = useState([]);

	useEffect(() => {
		selectAllProduct(category).then((results) => setProduct(results.data));
	}, [category]);

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
			<form id="#" action="share" method="post">
				<fieldset>
					<legend id="share">Ce que je donne</legend>
					<button
						type="button"
						className="toggle-list btn-fruit"
						onClick={() => setCategory("Fruits")}
					>
						Fruits
					</button>

					<button
						type="button"
						className="toggle-list btn-keep"
						onClick={() => setCategory("Conserves")}
					>
						Conserves
					</button>

					<button
						type="button"
						className="toggle-list btn-vegetable"
						onClick={() => setCategory("Légumes")}
					>
						Légumes
					</button>
					<button
						type="button"
						className="toggle-list btn-fresh"
						onClick={() => "Produits frais"}
					>
						Produits frais
					</button>
					<button
						type="button"
						className="toggle-list btn-milk"
						onClick={() => "Produits laitiers"}
					>
						Produits laitiers
					</button>
					<button
						type="button"
						className="toggle-list btn-condiment"
						onClick={() => "Condiments"}
					>
						Condiments
					</button>
					<button
						type="button"
						className="toggle-list btn-legumineuse"
						onClick={() => "Condiments"}
					>
						Légumineuse
					</button>
					<button
						type="button"
						className="toggle-list btn-feculent"
						onClick={() => "Féculents"}
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
						/>
						<label htmlFor="autre2" className="label-fruit">
							Autre
						</label>
						<input
							type="text"
							id="otherTextField3"
							name="other_input3"
							placeholder="Veuillez préciser..."
							class="input-fresh"
						/>
					</div>
					<input
						type="checkbox"
						className="date-peremption date-peremption-fresh"
						id="datePeremptionCheckbox2"
						name="msg_fresh[]"
						value="date-peremption"
					/>
					<label htmlFor="datePeremptionCheckbox2">date</label>
					<input
						type="date"
						className="date-fresh"
						id="datePeremption2"
						name="date_input2"
					/>
					<br />
					{product.map((item) => {
						return <FormulaireProduits key={item.id} data={item} />;
					})}
					<button type="button" id="validate-all">
						Voir ma sélection
					</button>
					<div id="selected-items" />
				</fieldset>
			</form>
		</main>
	);
};

export default FormulaireDons;
