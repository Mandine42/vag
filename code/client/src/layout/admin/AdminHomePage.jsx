import { Link } from "react-router-dom";

const AdminHomePage = () => {
	return (
		<div>
			<h1>Page Admin</h1>
			<p>Bienvenue dans l'espace administrateur.</p>
			{/* Ajoutez le contenu et les fonctionnalités spécifiques ici */}
			<p>
				<Link to={"/admin/dons"}>Ajout d'un don</Link>
			</p>
		</div>
	);
};

export default AdminHomePage;
