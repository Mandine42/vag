class Api {
	//récupérer les vehicules sur API
	getVehicules = async () => {
		// configurer la requête HTTP
		const requestConfig = new Request("http://localhost:3000/user", {
			method: "GET",
		});
		// executer le requête
		const request = await fetch(requestConfig);
		const response = await request.json();

		// console.log(response);
	};
}
const api = new Api();
api.getVehicules();
