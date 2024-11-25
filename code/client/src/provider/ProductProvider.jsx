// import { createContext } from "react";

// // créer le contexte : qui permet de stocker des données
// const ProductContexte = createContext();

// // creer un provider, composant qui fournit les données stockées dans le contexte
// // children permet d'indiquer que le composant accepte des composants enfants

// const ProductProvider = ({ children }) => {
// 	// état permet de stocker les données de l'utilisateur connecté
// 	// la valeur null indique qu'aucun utilisateur n'est connecté
// 	const [product, setProduct] = useState(null);

// 	// const [product, setProduct] = useState({
// 	// 	// email: "admin@admin.fr",
// 	// 	// isAdmin: true, // Passez à `false` pour tester une redirection
// 	// });

// 	return (
// 		<ProductContexte.Provider value={{ product, setProduct }}>
// 			{children}
// 		</ProductContexte.Provider>
// 	);
// };

// export { ProductContexte, ProductProvider };
