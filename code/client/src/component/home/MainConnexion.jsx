import { Link } from "react-router-dom";

const MainConnexion = () => {
	return (
		<main>
			<div id="form-container">
				<section id="connexion">
					<h2>Déjà inscrit ?</h2>
					<form
						id="loginForm"
						className="loginForm"
						action="profil.html"
						method="post"
					>
						<fieldset>
							<legend>Identifiants</legend>
							<label for="email">Adresse email *</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								aria-required
							/>
							<label for="password">Mot de passe *</label>
							<input type="password" id="password" name="password" required />
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
								<li class="voisins">
									<strong>Faire des dons alimentaires :</strong> Partagez les
									excédents de vos courses ou vos préparations maison avec ceux
									qui en ont besoin. Chaque geste compte !
								</li>
								<li class="voisins">
									<strong>Recevoir des dons :</strong> Profitez des denrées
									offertes par vos voisins pour compléter vos repas sans
									débourser un centime.
								</li>
								<li class="voisins">
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

						<button
							type="button"
							onclick="window.location.href='inscription.html'"
						>
							S'inscrire
						</button>
					</form>
				</section>
			</div>
		</main>
	);
};

export default MainConnexion;
