import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
	creatCollect,
	selectOneCollect,
	updateCollect,
} from "../../service/collect_api";
import { useContext, useEffect, useState } from "react";
import { selectAllDistrict } from "../../service/district_api";
import { authUser } from "../../service/user_api";
import { UserContexte } from "../../provider/UserProvider";

const AdminCollectFormPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// reste permet de réinitialiser un formulaire avec des données
		reset,
	} = useForm();
	const navigate = useNavigate();
	// récupérer les quartiers
	const [district, setDistrict] = useState([]);
	//stocké le point de collecte dont l'identifiant est contenu dans la route
	const [collect, setCollect] = useState([]);

	// récupérer la variable de route
	const { id } = useParams();

	useEffect(() => {
		selectAllDistrict().then((results) => setDistrict(results.data));
		selectOneCollect(id).then((results) => {
			// case a cocher, unarray est obligatoire pour précocher
			// const data = {...results.data, option_id: results.data.split(',')};

			//stocker les resultats dans un état
			setCollect(results.data);

			// reinitialiser le formulaire avec les données existantes
			// console.log(results.data);
			reset(results.data);
		});
	}, [id, reset]);

	// recupérer l'utilisateur stocké dans le contexte
	const { user, setUser } = useContext(UserContexte);

	const submit = async (data) => {
		// Exemple de gestion des données
		// console.log("Données soumises :", data);

		// authentification
		const authentication = await authUser(user);
		// console.log(authentication.data.token);

		// créer un point de collecte
		const results = id
			? await updateCollect(authentication.data.token, data)
			: await creatCollect(authentication.data.token, data);
		// si le point de collect àété créer
		if ([200, 201].indexOf(results.status) >= 0) {
			// stocker le message dans la session
			window.sessionStorage.setItem(
				"notice",
				id ? "Point de collecte modifié" : "Point de collecte créé",
			);
		}

		// // Redirection après soumission réussie
		navigate("/admin/collect");
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
							<span>{errors?.meeting_point?.message}</span>

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

							<select {...register("district_id")} id="districtName">
								<option value="" />
								{district.map((data) => (
									<option key={Math.random()} value={data.id}>
										{data.name}
									</option>
								))}
							</select>
							<input type="hidden" {...register("district_id")} />

							<span>{errors?.district_id?.message}</span>
						</fieldset>
						<p>
							{/* la valeur du champs id est récupérée à partir de variable de route */}
							<input type="hidden" value={id} {...register("id")} />
							<input
								className="btn-admin"
								type="submit"
								value="Ajouter le point de collecte"
							/>
						</p>
					</form>

					<ul>
						<li>
							<Link to="/admin/collect">
								Retour à la liste des points de collecte
							</Link>
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
};

export default AdminCollectFormPage;
