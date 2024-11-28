// création d'un contact

// async permet d'attendre la réponse de l'API

// formData contient les données du formulaire saisies par l'utilisateur
const create_contact = async (formData) => {
	const request = new Request(`${import.meta.env.VITE_API_URL}/contact`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	});
	// fetch permet de faire une requête HTTP
	const response = await fetch(request);
	// récupérer les données JSON contenues dans la réponse
	const data = await response.json();
	return data;
};

// récupération de tous les contacts
const get_contacts = async () => {
	const request = new Request(`${import.meta.env.VITE_API_URL}/contact`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const response = await fetch(request);
	const data = await response.json();
	return data;
};

export { create_contact, get_contacts };
