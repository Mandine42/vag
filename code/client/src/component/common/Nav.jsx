import { Link } from "react-router-dom";
const Nav = () => {
	return (
		// composant/balise Link remplace la balise a
		// l'attribut to remplace l'attribut href
		<header id="scrolled" className="scrolled" role="banner">
			<ol>
				<li>
					<Link to="/">
						<img src="asset/Group-5.svg" alt="Logo" />
					</Link>
				</li>
			</ol>
			<nav id="desktop-nav" role="navigation">
				<ul>
					<li>
						<Link to="/collect">Points de Collecte /</Link>
					</li>
					<li>
						<Link to="/formulaire-dons">Faire un don</Link>
					</li>
					<li>
						<Link to="/voir-dons">Réserver un don</Link>
					</li>
					<li>
						<Link to="/inscription">Connexion|Inscription</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
