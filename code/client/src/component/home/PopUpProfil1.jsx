import { Link } from "react-router-dom";

const PopUpProfil1 = () => {
	return (
		<div id="popup" class="popup">
			<section class="popup-content">
				<span class="close">&times;</span>
				<ul>
					<li>
						<img
							className="params"
							src="asset/img-params/Manual.svg"
							alt="logo avec une main"
						/>
						<h3 className="param-title">Comment fonctionne VAG</h3>

						<Link to="fonctionnement.html">
							<img
								class="params"
								src="asset/img-params/Forward.svg"
								alt="fleche"
							/>
						</Link>
					</li>
					<li>
						<img
							className="params"
							src="asset/img-params/User.svg"
							alt="logo avec un profil"
						/>
						<h3 class="param-title">Détail du compte</h3>
						<Link to="detail-compte.html">
							<img
								class="params"
								src="asset/img-params/Forward.svg"
								alt="fleche"
							/>
						</Link>
					</li>
					<li>
						<img
							className="params"
							src="asset/img-params/Auction.svg"
							alt="logo avec un maillet pour juge"
						/>
						<h3 className="param-title">Mentions légales</h3>
						<Link to="mentions-legales.html">
							<img
								class="params"
								src="asset/img-params/Forward.svg"
								alt="fleche"
							/>
						</Link>
					</li>
					<li>
						<img
							className="params"
							src="asset/img-params/Postal.svg"
							alt="logo avec une boîte aux lettres"
						/>
						<h3 className="param-title">Nous contacter</h3>
						<Link to="" id="contact-popup-params">
							<img
								class="params"
								src="asset/img-params/Forward.svg"
								alt="fleche"
							/>
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default PopUpProfil1;
