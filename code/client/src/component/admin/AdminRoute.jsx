import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContexte } from "../../provider/UserProvider";

const AdminRoute = () => {
	const { user } = useContext(UserContexte);

	// Vérifiez si l'utilisateur est connecté et s'il est admin
	if (!user || !user.isAdmin) {
		return <Navigate to="/connexion" replace />;
	}

	// Rend les routes enfants si l'utilisateur est admin
	return <Outlet />;
};

export default AdminRoute;
