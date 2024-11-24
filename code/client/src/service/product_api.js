const selectAllProduct = async () => {
	const request = new Request(`${import.meta.env.VITE_API_URL}/product`);

	const response = await fetch(request);

	const data = await response.json();

	return data;
};

export { selectAllProduct };
// enregistrer un don
// formData: saisie du formulaire
const listProduct = async (formdata) => {
	// configurer la requête HTTP
	const request = new Request(`${import.meta.env.VITE_API_URL}/product`, {
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

// connexion
// const loginUser = async (formdata) => {
// 	// configurer la requête HTTP
// 	const request = new Request(`${import.meta.env.VITE_API_URL}/user/login`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(formdata),
// 	});
// 	const response = await fetch(request);
// 	const data = await response.json();
// 	return data;
// };
export default listProduct;
