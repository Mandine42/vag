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
				{/* <li>{user?.email}</li> */}
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
					<Link to="/dons">
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
					<Link to="/connexion">
						<img src="asset/img-smartphone/Collect.svg" alt="Logo du profil" />
						<span className="smart">Connexion</span>
					</Link>
					{/* {
						// condition react: condition ternaire seule condition dans le HTML de react
						// condition ? instruction : else
						user ? (
							<Link to={"#"}>connecté</Link>
						) : (
							<>
								<Link to="/formulaire-inscription">Connexion|Inscription</Link>
							</>
						)
					} */}
				</li>
			</ul>
		</nav>
	);
};

export default NavSmartphone;
