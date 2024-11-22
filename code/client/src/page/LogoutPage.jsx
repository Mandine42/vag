import { useContext, useEffect } from "react";
import { UserContexte } from "../provider/UserProvider";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
	// accéder à l'utilisateur stocké dans le contexte
	const { user, setUser } = useContext(UserContexte);
	// useNavigate : redirection
	const navigate = useNavigate();
	// exécuter des instructions à l'affichage du composant
	useEffect(() => {
		// supprimer l'utilisateur du contexte
		setUser(null);
		// redirection
		navigate("/");
	}, [setUser, navigate]);

	return <></>;
};

export default LogoutPage;
