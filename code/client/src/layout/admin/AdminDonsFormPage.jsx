import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { creatCollect } from "../../service/collect_api";
import { useContext, useEffect, useState } from "react";
import { selectAllDistrict } from "../../service/district_api";
import { authUser } from "../../service/user_api";
import { UserContexte } from "../../provider/UserProvider";

const AdminDonsFormPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	// récupérer les quartiers
	const [district, setDistrict] = useState([]);
	// Pour récuperer les options
	//const [district, setDistrict] = useState([]);
	useEffect(() => {
		selectAllDistrict().then((results) => setDistrict(results.data));
		//selectAllDistrict().then((results) => setDistrict(results.data));
	}, []);

	// recupérer l'utilisateur stocké dans le contexte
	const { user, setUser } = useContext(UserContexte);

	const submit = async (data) => {
		// Exemple de gestion des données
		// console.log("Données soumises :", data);

		// authentification
		const authentication = await authUser(user);
		// console.log(authentication.data.token);

		// créer un point de collecte
		const results = await creatCollect(authentication.data.token, data);

		// // Redirection après soumission réussie
		// navigate("/admin/dons");
	};

	return (
		<main>
			<div id="form-container-collection">
				<section id="add-collection">
					<h2>Ajouter un point de collecte</h2>
					<form
						id="collectionForm"
						className="collectionForm"
						onSubmit={handleSubmit(submit)}
					>
						{/* si le formulaire possède un champ file 
						ajouter l'attribut encType = multipart/form-data 
						<form
						id="collectionForm"
						className="collectionForm"
						onSubmit={handleSubmit(submit)} encType = multipart/form-data*/}
						<fieldset>
							<legend>Informations du point de collecte</legend>
							<label htmlFor="adress">Adresse *</label>
							<input
								type="text"
								{...register("adress", {
									required: "L'adresse est obligatoire",
								})}
								id="adress"
							/>
							<span>{errors?.adress?.message}</span>

							<label htmlFor="meetingPoint">Point de collecte *</label>
							<input
								type="text"
								{...register("meeting_point")}
								id="meetingPoint"
							/>
							<span>{errors?.meetingPoint?.message}</span>

							<label htmlFor="iframe">Iframe *</label>
							<textarea {...register("iframe")} id="iframe" />
							<span>{errors?.iframe?.message}</span>

							{/* table de jointure case à cochée */}
							{/* {
								options.map((data) =>(
									<p key={Math.random()}>
										<label>
											<input type="checkbox" value="data.id"{...register("options_id",{required: "options are required",

											})} 
											/>
											{data.name}
										</label>
									</p>
							})} */}

							<label htmlFor="districtName">Nom du quartier *</label>

							<select
								type="text"
								{...register("district_id")}
								id="districtName"
							>
								<option value="" />
								{district.map((data) => (
									<option key={Math.random()} value={data.id}>
										{data.name}
									</option>
								))}
							</select>

							<span>{errors?.districtName?.message}</span>
						</fieldset>
						<p>
							<input type="hidden" value="" {...register("id")} />
							<input type="submit" value="Ajouter le point de collecte" />
						</p>
					</form>

					<ul>
						<li>
							<Link to="/admin/dons">
								Retour à la liste des points de collecte
							</Link>
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
};

export default AdminDonsFormPage;
