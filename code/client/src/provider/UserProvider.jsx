import { createContext, useState } from "react";

// créer le contexte : qui permet de stocker des données
const UserContexte = createContext();

// creer un provider, composant qui fournit les données stockées dans le contexte
// children permet d'indiquer que le composant accepte des composants enfants

const UserProvider = ({ children }) => {
	// état permet de stocker les données de l'utilisateur connecté
	// la valeur null indique qu'aucun utilisateur n'est connecté
	// const [user, setUser] = useState(null);

	const [user, setUser] = useState({
		email: "admin@admin.fr",
		isAdmin: true, // Passez à `false` pour tester une redirection
	});

	return (
		<UserContexte.Provider value={{ user, setUser }}>
			{children}
		</UserContexte.Provider>
	);
};

export { UserContexte, UserProvider };
