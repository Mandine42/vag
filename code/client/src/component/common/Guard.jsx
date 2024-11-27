import { useContext, useEffect } from "react";
import { UserContexte } from "../../provider/UserProvider";
import { useNavigate } from "react-router-dom";

const Guard = ({ children, roleArray }) => {
	// récupérer l'utilisateur
	const { user, setUser } = useContext(UserContexte);

	// navigation
	const navigate = useNavigate();

	// a l'affichage tester le role utilisateur
	useEffect(() => {
		// indexOf permet de chercher l'indice d'un élément dans un array
		if (roleArray.indexOf(user?.role.name) === -1) {
			window.sessionStorage.setItem("notice", "Accès refusé");
			navigate("/");
			return;
		}
	}, [navigate, roleArray, user]);

	return children;
};

export default Guard;
