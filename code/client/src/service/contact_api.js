// enregistrer un contact
// formData: saisie du formulaire
const contact = async (formdata) => {
	// configurer la requête HTTP
	const request = new Request(`${import.meta.env.VITE_API_URL}/contact`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formdata),
	});

	// récuperer réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};

export { contact };
// enregistrer un contact
// formData: saisie du formulaire
// const contact = async (formdata) => {
// 	try {
// 		// configurer la requête HTTP
// 		const request = new Request(`${import.meta.env.VITE_API_URL}/contact`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(formdata),
// 		});

// 		// récupérer la réponse
// 		const response = await fetch(request);

// 		// Vérification du statut de la réponse
// 		if (!response.ok) {
// 			// Si le statut de la réponse est différent de 200, lève une erreur
// 			throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
// 		}

// 		// récupérer les données JSON contenues dans la réponse
// 		const data = await response.json();

// 		// retourner les données JSON
// 		return data;
// 	} catch (error) {
// 		// Gestion des erreurs de requête ou autre erreur
// 		console.error("Erreur lors de l'envoi du contact :", error);
// 		// Vous pouvez aussi retourner un objet avec un message d'erreur, ou réafficher l'erreur dans l'interface
// 		return { error: error.message };
// 	}
// };

// export { contact };
