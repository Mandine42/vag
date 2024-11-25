import listProduct, { selectAllProduct } from "../../service/product_api";
import { Link, useNavigate } from "react-router-dom";
import FormulaireProduits from "./FormulaireProduits";
import "../../assets/CSS/formulaire-dons.css";
import { useForm } from "react-hook-form";

const FormDons = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// uneNavigate permet de changer de route
	const navigate = useNavigate();
	// const { product, setProduct } = useContext(ProductContexte);
	//soumission du formulaire
	// paramètre data permet de récuperer la saisie du formulaire
	const submit = async (data) => {
		console.log(data);
		// // enregistrer l'utilisateur
		// const results = await listProduct(data);
		// // si l'enregestriment a été effectué
		// if (results.status === 201) {
		// 	// stocker le message dans la session
		// 	window.sessionStorage.setItem("notice", "Votre don est enregistré");

		// redirection vers une route
		// navigate("/voir-dons");
	};
	// };

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
					<button
						type="button"
						className="toggle-list btn-fruit"
						onClick={() => "fruit"}
					>
						Fruits
					</button>

					<button
						type="button"
						className="toggle-list btn-keep"
						onClick={() => "Conserves"}
					>
						Conserves
					</button>

					<button
						type="button"
						className="toggle-list btn-vegetable"
						onClick={() => "Légumes"}
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
							class="input-fresh"
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
					{/* {product.map((item) => {
						return <FormulaireProduits key={item.id} data={item} />;
					})} */}
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
