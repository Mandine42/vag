import { Link } from "react-router-dom";
const MainPlanSite = () => {
	return (
		<main>
			<section id="site">
				<h1 id="sites">Plan du site</h1>
				<ul>
					<li>
						<Link to="/">
							<h3 className="site">Accueil</h3>
						</Link>
					</li>
					<li>
						<Link to="/collect">
							<h3 className="site">Points de Collecte</h3>
						</Link>
						<ul className="categorie">
							<li>
								<Link to="/collect">Filtrer les points</Link>
							</li>
							<li>
								<Link to="/collect">Sélectionner un point</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/dons">
							<h3 className="site">Faire un Don</h3>
						</Link>
						<ul class="categorie">
							<li>
								<Link to="/dons#formulaire">Formulaire de Don</Link>
							</li>
							<li>
								<Link to="/dons#confirmation">Confirmation du Don</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/voir-dons">
							<h3 className="site">Réserver un Don</h3>
						</Link>
						<ul class="categorie">
							<li>
								<Link to="/voir-don#creneau">Choisir un créneau</Link>
							</li>
							<li>
								<Link to="/voir-don#point">
									Sélectionner un point de collecte
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/connexion">
							<h3 className="site">Connexion/Inscription</h3>
						</Link>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default MainPlanSite;
