import { Link } from "react-router-dom";
const UlParametre = () => {
	return (
		<ul>
			<li>
				<img src="asset/img-params/Manual.svg" alt="logo avec une main" />
				<h3>Comment fonctionne Voisins Anti-Gaspi</h3>
				<Link to="/fonctionnement">
					<img src="asset/img-params/Forward.svg" alt="fleche" />
				</Link>
			</li>
			<li>
				<img src="asset/img-params/User.svg" alt="logo avec un profil" />
				<h3>Détail du compte</h3>
				<Link to="/detail-compte">
					<img src="asset/img-params/Forward.svg" alt="fleche" />
				</Link>
			</li>
			<li>
				<img
					src="asset/img-params/Auction.svg"
					alt="logo avec un maillet pour juge"
				/>
				<h3>Mentions légales</h3>
				<Link to="/mentions-legales">
					<img src="asset/img-params/Forward.svg" alt="fleche" />
				</Link>
			</li>
			<li>
				<img
					src="asset/img-params/Postal.svg"
					alt="logo avec une boîte aux lettres"
				/>
				<h3>Nous contacter</h3>
				<Link to="/formulaire-contact">
					<img src="asset/img-params/Forward.svg" alt="fleche" />
				</Link>
			</li>
		</ul>
	);
};

export default UlParametre;
