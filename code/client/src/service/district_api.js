// récupération des points de collect
const selectAllDistrict = async () => {
	// configurer la requête HTTP
	const request = new Request(`${import.meta.env.VITE_API_URL}/district`);

	// récuperer réponse
	const response = await fetch(request);

	// récuperer les données JSON contenues dans la réponse
	const data = await response.json();

	// retourner les données JSON
	return data;
};

export { selectAllDistrict };
