import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerUser } from "../../service/user_api";
const MainInscription = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	//soumission du formulaire
	// paramètre data permet de récuperer la saisie du formulaire
	const submit = async (data) => {
		console.log(data);
		// enregistrer l'utilisateur
		const results = await registerUser(data);
	};
	return (
		<main>
			<div id="form-container">
				<section id="contact-connexion">
					<h2>S'inscrire</h2>

					<form id="signupForm" onSubmit={handleSubmit(submit)}>
						<fieldset id="civil">
							<legend>Etat Civil</legend>
							{/* register remplace l'attibut HTML name */}
							<label className="civil" htmlFor="nom">
								Nom *
							</label>
							<input
								className="etat"
								type="text"
								{...register("lastname")}
								id="nom"
							/>
							<label className="civil" htmlFor="prenom">
								Prénom *
							</label>
							<input
								className="etat"
								type="text"
								{...register("firstname")}
								id="prenom"
							/>
						</fieldset>

						<fieldset id="coordonnees">
							<legend>Vos Coordonnées</legend>
							<label className="coordonnees" htmlFor="tel">
								Téléphone
							</label>
							<input
								className="coor"
								type="tel"
								{...register("phone_number")}
								id="tel"
							/>

							<label className="coordonnees" htmlFor="adresse">
								Adresse *
							</label>
							<input
								className="coor"
								type="text"
								{...register("adress")}
								id="adresse"
								required
								aria-required
							/>

							<label className="coordonnees" htmlFor="quartier">
								Quartier
							</label>
							<select name="quartier" id="quartier" required aria-required>
								<option value="">Selectionnez</option>
								{/* {...register("district")} */}
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
							<label className="coordonnees" htmlFor="email">
								Email *
							</label>
							<input
								className="coor"
								type="email"
								name="email"
								{...register("email", {
									required: "Votre email est obligatoire",
								})}
								id="email"
							/>
							<span>{errors?.email?.message}</span>
						</fieldset>

						<fieldset id="identifiant">
							<legend>Identifiants</legend>
							<label className="identifiants" htmlFor="nom-utilisateur">
								Nom d'utilisateur *
							</label>
							<input
								className="user"
								type="text"
								id="nom-utilisateur"
								name="nom-utilisateur"
								required
								aria-required
							/>
							<label className="identifiants" htmlFor="avatar">
								Choisir une image
							</label>
							<input className="avatar" type="file" id="avatar" name="avatar" />
							<label className="identifiants" htmlFor="password">
								Mot de passe *
							</label>
							<input
								className="user"
								type="password"
								{...register("password")}
								id="password"
								name="password"
								required
								aria-required
							/>
							<label className="identifiants" htmlFor="password-confirm">
								Confirmer le mot de passe *
							</label>
							<input
								className="user"
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
								<label htmlFor="condition-checkbox">
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
