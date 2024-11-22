import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContexte } from "../../provider/UserProvider";
const Nav = () => {
	// useContext permet d'accéder aux données stockées dans un contexte
	const { user, setUser } = useContext(UserContexte);
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
					<li id="user-email">{user?.email}</li>
					<p>{JSON.stringify(user)}</p>
					<li>
						<Link to="/collect">Points de Collecte</Link>
					</li>

					<li>
						<Link to="/dons">Faire un don</Link>
					</li>
					<li>
						<Link to="/voir-dons">Réserver un don</Link>
					</li>
					{
						// condition react: condition ternaire seule condition dans le HTML de react
						// condition ? instruction : else
						user ? (
							<Link to={"/logout"}>connecté</Link>
						) : (
							<>
								<Link to="/connexion">Connexion|Inscription</Link>
							</>
						)
					}
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
