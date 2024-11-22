import { RouterProvider } from "react-router-dom";
import Accueil from "./page/Accueil";
import router from "./service/router";
import { UserProvider } from "./provider/UserProvider";

/*
Composant:
  capitaliser le nom du composant
  fonction doit retourner un élément unique
*/
const App = () => {
	return (
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	);
};

export default App;
