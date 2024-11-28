// récupération des points de collect
const selectAllCollect = async () => {
	// configurer la requête HTTP
	const request = new Request(`${import.meta.env.VITE_API_URL}/collect`);

	// récuperer réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};
// creer un point de collecte
const creatCollect = async (token, formType) => {
	// configurer la requête HTTP
	/*2 cas:
			-formulaire sans image:
				utiliser l'en tête Content-type : application/json
				utiliser JSON.stringify sur les données du formulaire, avec body
			-formulaire avec fichier:
				ne pas utiliser Content-type: application/json
				ne pas utiliser JSON.stringify dans body
				avec body, créer un objet Formdata avec chaque champs du formulaire
			*/
	// formumaire avec fichier > stocker la saisie dans un objet Formdata
	/*
		const formData = new Formadata ();
		formData.set ('id', formtype.id);
		formData.set ('model', formType.model);
		formdata.set ('price', formType.price);
		formdata.set ('image' , formtype.image[0]);
		*/

	const request = new Request(`${import.meta.env.VITE_API_URL}/collect`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formType),
	});

	// récuperer réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};
// récipération d'un point de collecte
const selectOneCollect = async (id) => {
	// configurer la requête HTTP
	const request = new Request(`${import.meta.env.VITE_API_URL}/collect/${id}`);

	// récuperer réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};
//modifier un point de collecte
const updateCollect = async (token, formType) => {
	const request = new Request(
		`${import.meta.env.VITE_API_URL}/collect/${formType.id}`,
		{
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formType),
		},
	);

	// récuperer réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};

//supprimer un point de collecte
const deleteCollect = async (token, id) => {
	const request = new Request(`${import.meta.env.VITE_API_URL}/collect/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: id }),
	});

	// récuperer réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};
export {
	selectAllCollect,
	creatCollect,
	selectOneCollect,
	updateCollect,
	deleteCollect,
};
