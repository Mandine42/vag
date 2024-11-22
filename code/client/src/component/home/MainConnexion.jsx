import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../service/user_api";
import { useContext } from "react";
import { UserContexte } from "../../provider/UserProvider";

const MainConnexion = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// uneNavigate permet de changer de route
	const navigate = useNavigate();
	// useContext permet d'accéder aux données stockées dans un contexte
	const { user, setUser } = useContext(UserContexte);

	const submit = async (data) => {
		// console.log(data);
		// enregistrer l'utilisateur
		const results = await loginUser(data);
		// si l'enregestriment a été effectué
		if (results.status === 200) {
			// stocker le message dans la session
			window.sessionStorage.setItem("notice", "Vous êtes bien connecté");
			// stocker l'utilisateur dans le contexte
			setUser(results.data);
			// redirection vers une route
			navigate("/");
		}
	};
	return (
		<main>
			<div id="form-container-connexion">
				<section id="connexion">
					<h2>Déjà inscrit ?</h2>
					<form
						id="loginForm"
						className="loginForm"
						onSubmit={handleSubmit(submit)}
					>
						<fieldset>
							<legend>Identifiants</legend>
							<label htmlFor="email">Adresse email *</label>
							<input
								type="email"
								{...register("email", {
									required: "Votre email est obligatoire",
								})}
								id="email"
							/>
							<span>{errors?.email?.message}</span>
							<label htmlFor="password">Mot de passe *</label>
							<input type="password" {...register("password")} id="password" />
						</fieldset>
						<ul>
							<li>
								<Link to="">Mot de passe oublié ?</Link>
							</li>
						</ul>

						<input type="submit" value="Se connecter" />

						<section id="inscription">
							<h3>
								Rejoignez la Communauté Anti-Gaspi et Faites une Différence dans
								Votre Quartier !
							</h3>
							<p>
								Vous souhaitez contribuer à une belle cause tout en renforçant
								les liens avec vos voisins ? Inscrivez-vous dès maintenant sur{" "}
								<span>VAG</span> et découvrez une manière simple et gratifiante
								de lutter contre le gaspillage alimentaire.
							</p>
							<h3>Pourquoi s'inscrire ?</h3>
							<ul id="pourquoi">
								<li className="voisins">
									<strong>Faire des dons alimentaires :</strong> Partagez les
									excédents de vos courses ou vos préparations maison avec ceux
									qui en ont besoin. Chaque geste compte !
								</li>
								<li className="voisins">
									<strong>Recevoir des dons :</strong> Profitez des denrées
									offertes par vos voisins pour compléter vos repas sans
									débourser un centime.
								</li>
								<li className="voisins">
									<strong>
										Participer activement à la vie de votre quartier :
									</strong>{" "}
									Rencontrez vos voisins, échangez des recettes et des astuces,
									et renforcez le sentiment de communauté.
								</li>
							</ul>
							<p>
								En rejoignant <span>VAG</span>, vous devenez acteur d'une chaîne
								de solidarité locale et aidez à construire un quartier plus uni
								et durable.
							</p>
							<p>
								Inscrivez-vous dès aujourd'hui et faites partie de ce mouvement
								positif ! Ensemble, réduisons le gaspillage et enrichissons
								notre communauté
							</p>
						</section>
						{/* <input type="submit" value="S'inscrire" /> */}
						<button type="button" Link to="/formulaire-inscription">
							S'inscrire
						</button>
					</form>
				</section>
			</div>
		</main>
	);
};

export default MainConnexion;
