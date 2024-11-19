import { Link } from "react-router-dom";
const MainInscription = () => {
	return (
		<main>
			<div id="form-container">
				<section id="contact">
					<h2>S'inscrire</h2>

					<form id="signupForm" action="user" method="post">
						<fieldset id="civil">
							<legend>Etat Civil</legend>
							<label class="civil" for="nom">
								Nom *
							</label>
							<input
								class="etat"
								type="text"
								id="nom"
								name="nom"
								required
								aria-required
							/>
							<label class="civil" for="prenom">
								Prénom *
							</label>
							<input
								class="etat"
								type="text"
								id="prenom"
								name="prenom"
								required
								aria-required
							/>
						</fieldset>

						<fieldset id="coordonnees">
							<legend>Vos Coordonnées</legend>
							<label class="coordonnees" for="tel">
								Téléphone
							</label>
							<input class="coor" type="tel" name="telephone" id="tel" />
							<label class="coordonnees" for="adresse">
								Adresse *
							</label>
							<input
								class="coor"
								type="text"
								name="adresse"
								id="adresse"
								required
								aria-required
							/>
							<label class="coordonnees" for="quartier">
								Quartier
							</label>
							<select name="quartier" id="quartier" required aria-required>
								<option value="">Selectionnez</option>
								<optgroup label="Quartier">
									<option value="Republique">Bas Montreuil - République</option>
									<option value="Chanzy">Etienne Marcel - Chanzy</option>
									<option value="Bobillot">Bobillot</option>
									<option value="la noue">La Noue - Clos français</option>
									<option value="villiers">Villiers - Barbusse</option>
									<option value="solidarite">Solidarité - Carnot</option>
									<option value="centre">Centre-ville</option>
									<option value="beaumonts">Jean Moulin - Beaumonts</option>
									<option value="ramenas">Ramenas - Léo Lagrange</option>
									<option value="branly">Branly - Boissière</option>
									<option value="bel air">
										Bel Air - Grands Pêchers - Renan
									</option>
									<option value="signac">Signac - Murs à pêches</option>
									<option value="ruffins">Ruffins - Théophile Sueur</option>
									<option value="montreau">Montreau - Le Morillon</option>
								</optgroup>
							</select>
							<label class="coordonnees" for="email">
								Email *
							</label>
							<input
								class="coor"
								type="email"
								name="email"
								id="email"
								required
								aria-required
							/>
						</fieldset>

						<fieldset id="identifiant">
							<legend>Identifiants</legend>
							<label class="identifiants" for="nom-utilisateur">
								Nom d'utilisateur *
							</label>
							<input
								class="user"
								type="text"
								id="nom-utilisateur"
								name="nom-utilisateur"
								required
								aria-required
							/>
							<label class="identifiants" for="avatar">
								Choisir une image
							</label>
							<input class="avatar" type="file" id="avatar" name="avatar" />
							<label class="identifiants" for="password">
								Mot de passe *
							</label>
							<input
								class="user"
								type="password"
								id="password"
								name="password"
								required
								aria-required
							/>
							<label class="identifiants" for="password-confirm">
								Confirmer le mot de passe *
							</label>
							<input
								class="user"
								type="password"
								id="password-confirm"
								name="password-confirm"
								required
								aria-required
							/>
						</fieldset>

						<fieldset id="condition">
							<legend>Conditions d'utilisation</legend>
							<div id="condition-container">
								<input
									type="checkbox"
									id="condition-checkbox"
									name="condition"
									required
									aria-required
								/>
								<label for="condition-checkbox">
									<Link to="condition-inscription.html" id="condition-link">
										J'ai lu et j'accepte les conditions d'utilisation *
									</Link>
								</label>
							</div>
						</fieldset>

						<input type="submit" value="S'inscrire" id="submit-button" />
					</form>
				</section>
			</div>
		</main>
	);
};
export default MainInscription;
