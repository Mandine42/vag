import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer role="contentinfo">
			<section id="footer">
				<h3 id="pied-de-page">VOISINS ANTI-GASPI</h3>
				<ul id="menu-footer">
					<li>
						<Link to="/plan-site">Plan du site</Link>
					</li>
					<li>
						<Link to="/mentions-legales">Mentions légales</Link>
					</li>
					<li>
						<Link to="/cgu">CGU</Link>
					</li>
					<li>
						<Link to="/contact">
							<img
								src="/asset/Contactez-nous.svg"
								alt="Logo de Contactez-nous"
							/>
						</Link>
					</li>
				</ul>
				<p>Copyright © 2024 Voisins anti-gaspi.Tous droits réservés.</p>
				<ul id="reseaux-sociaux">
					<li>
						<Link to="https://x.com/goret_aman4826">
							<img src="/asset/TwitterX.svg" alt="Logo TwitterX" />
						</Link>
					</li>
					<li>
						<Link to="https://www.instagram.com/voisinsantigaspi">
							<img src="/asset/Instagram.svg" alt="Logo Instagram" />
						</Link>
					</li>
					<li>
						<Link to="https://www.facebook.com/profile.php?id=61568505726912&sk=about">
							<img src="/asset/Facebook.svg" alt="Logo Facebook" />
						</Link>
					</li>
				</ul>
			</section>
		</footer>
	);
};

export default Footer;
