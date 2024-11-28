import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { create_contact } from "../../service/contact_api";
import { useState } from "react";

const MainContact = () => {
	// Gestion du formulaire
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Hook de react router pour changer de route
	const navigate = useNavigate();

	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const submit = async (data) => {
		try {
			// Enregistrer le contact dans la base de données
			const result = await create_contact(data);

			// Si la création est réussie, afficher un message de succès et rediriger
			if (result.status === 201 || result.status === 200) {
				// Stocker le message dans le session storage
				window.sessionStorage.setItem("notice", "Contact créé avec succès !");
				setSuccessMessage("Contact créé avec succès !");
				navigate("/");
			} else {
				// Mettre à jour l'état avec le message d'erreur
				setErrorMessage(
					"Erreur lors de la création du contact. Veuillez réessayer.",
				);
			}
		} catch (error) {
			setErrorMessage(
				"Erreur de connexion au serveur. Veuillez réessayer plus tard.",
			);
		}
	};

	return (
		<main className="main-contact">
			<h1>Créer un Nouveau Contact</h1>
			{errorMessage && <p className="error-message">{errorMessage}</p>}
			{successMessage && <p className="success-message">{successMessage}</p>}
			<form onSubmit={handleSubmit(submit)} className="form-contact">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					{...register("email", { required: "L'email est requis" })}
					id="email"
					required
					aria-required="true"
				/>
				<span className="error-message">{errors.email?.message}</span>

				<label htmlFor="subject">Sujet</label>
				<input
					type="text"
					{...register("subject", { required: "Le sujet est requis" })}
					id="subject"
					required
					aria-required="true"
				/>
				<span className="error-message">{errors.subject?.message}</span>

				<label htmlFor="message">Message</label>
				<textarea
					{...register("message", { required: "Le message est requis" })}
					id="message"
					required
					aria-required="true"
				>
					message
				</textarea>
				<span className="error-message">{errors.message?.message}</span>

				<button type="submit" id="submit-contact">
					Envoyer
				</button>
			</form>
		</main>
	);
};

export default MainContact;
