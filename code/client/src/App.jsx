import { RouterProvider } from "react-router-dom";
import Accueil from "./page/Accueil";
import router from "./service/router";

/*
Composant:
  capitaliser le nom du composant
  fonction doit retourner un élément unique
*/
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
