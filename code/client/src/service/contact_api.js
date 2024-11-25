// enregistrer un user
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
