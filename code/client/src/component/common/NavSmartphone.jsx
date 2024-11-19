import { Link } from "react-router-dom";
const NavSmartphone = () => {
	return (
		<nav id="smartphone-nav" role="navigation">
			<ol>
				<li>
					<Link to="/">
						<img src="asset/img-smartphone/logo-smartphone.svg" alt="Logo" />
					</Link>
				</li>
			</ol>
			<ul id="smartphone">
				<li>
					<Link to="/collect">
						<img
							src="asset/img-smartphone/Profil.svg"
							alt="Logo de la collect"
						/>
						<span className="smart">Mon quartier</span>
					</Link>
				</li>
				<li>
					<Link to="/formulaire-dons">
						<img src="asset/img-smartphone/Dons.svg" alt="Logo du don" />
						<span className="smart">Faire un don</span>
					</Link>
				</li>
				<li>
					<Link to="/voir-dons">
						<img
							src="asset/img-smartphone/voir-les-dons.svg"
							alt="Logo Réserver"
						/>
						<span className="smart">Réserver</span>
					</Link>
				</li>
				<li>
					<Link to="/inscription">
						<img src="asset/img-smartphone/Collect.svg" alt="Logo du profil" />
						<span className="smart">Connexion</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavSmartphone;
