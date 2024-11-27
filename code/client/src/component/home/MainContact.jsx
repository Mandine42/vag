// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { contact } from "../../service/contact_api";
// const MainContact = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm();
// 	// uneNavigate permet de changer de route
// 	const navigate = useNavigate();
// 	// hook useState : permet de recharger visuelement le composant
// 	const [contact, setContact] = useState([]);

// 	//hook useEffect : permet de déclencher des actions lors du cycle de vie d'un composant (affichage, mise à jour, desaffichage)
// 	// [] : permet de déclencher des actions une unique fois, lors de l'affichage du composant
// 	useEffect(() => {
// 		// récuperer toous les points de collect
// 		// .then: j'attends
// 		contact().then((results) => setProduct(results.data));
// 	}, []);
// 	const submit = (data) => {
// 		console.log("Données soumises :", data);
// 		// Ajoutez ici votre logique pour traiter les données
// 		return (
// 			<main>
// 				<h2 className="contact">Nous Contacter</h2>

// 				<div className="formulaire-wrapper">
// 					<figure>
// 						<img
// 							src="asset/img-pop-up/pop-up-contact.svg"
// 							alt="illustration de contact"
// 						/>
// 					</figure>

// 					<form action="contact" method="post">
// 						<input type="text" name="nom" placeholder="Votre nom" required />
// 						<input
// 							type="email"
// 							name="email"
// 							placeholder="Votre email"
// 							required
// 						/>
// 						<textarea
// 							name="message"
// 							rows="4"
// 							placeholder="Votre message"
// 							required
// 						>
// 							Votre message
// 						</textarea>
// 						<Link to="">Envoyer</Link>
// 					</form>
// 				</div>
// 			</main>
// 		);
// 	};
// };
// export default MainContact;

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { contact } from "../../service/contact_api"; // Assurez-vous d'importer correctement votre fonction d'API

const MainContact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const [contactData, setContactData] = useState([]);

	// hook useEffect : permet de récupérer les points de contact
	useEffect(() => {
		contact() // On suppose que contactApi est une fonction pour récupérer les données
			.then((results) => setContactData(results.data))
			.catch((error) =>
				console.error("Erreur lors de la récupération des contacts", error),
			);
	}, []);

	// Fonction pour gérer la soumission du formulaire
	const onSubmit = (data) => {
		console.log("Données soumises :", data);
		// Logique pour envoyer les données à votre serveur ou API
		// Par exemple, vous pouvez appeler une fonction d'API pour envoyer le message
		// contactApi.submitContactForm(data); // Fonction hypothétique pour envoyer le formulaire

		// Vous pouvez aussi naviguer après la soumission
		navigate(""); // Redirige l'utilisateur après la soumission, vous pouvez ajuster cette route
	};

	return (
		<main>
			<h2 className="contact">Nous Contacter</h2>

			<div className="formulaire-wrapper">
				<figure>
					<img
						src="asset/img-pop-up/pop-up-contact.svg"
						alt="illustration de contact"
					/>
				</figure>

				{/* Formulaire React Hook Form */}
				<form onSubmit={handleSubmit(onSubmit)} method="post">
					<input
						type="email"
						name="email"
						placeholder="Votre email"
						required
						{...register("email", { required: "Email requis" })}
					/>
					{errors.email && <p>{errors.email.message}</p>}

					<input
						type="text"
						name="subject"
						placeholder="Votre sujet"
						required
						{...register("subject", { required: "Nom requis" })}
					/>
					{errors.nom && <p>{errors.nom.message}</p>}

					<textarea
						name="message"
						rows="4"
						placeholder="Votre message"
						required
						{...register("message", { required: "Message requis" })}
					>
						Votre message
					</textarea>
					{errors.message && <p>{errors.message.message}</p>}

					<input
						type="date"
						name="date"
						required
						{...register("date", { required: "Nom requis" })}
					/>
					{errors.date && <p>{errors.nom.message}</p>}

					<button type="submit">Envoyer</button>
				</form>
			</div>
		</main>
	);
};

export default MainContact;
