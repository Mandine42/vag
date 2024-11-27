import { Link } from "react-router-dom";

const AdminHomePage = () => {
	return (
		<main>
			<div>
				<h1>Page Admin</h1>
				<p>Bienvenue dans l'espace administrateur.</p>
				{/* Ajoutez le contenu et les fonctionnalités spécifiques ici */}
				<p>
					<Link className="btn-admin" to={"/admin/collect"}>
						Gérer les points de collecte
					</Link>
				</p>
			</div>
		</main>
	);
};

export default AdminHomePage;
