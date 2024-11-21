import { Link } from "react-router-dom";
const PopUpInscription = () => {
	return (
		<div id="popup" className="popup">
			<section className="popup-content">
				<span className="close">&times;</span>
				<h2>Bienvenue!</h2>
				<figure>
					<img
						src="asset/img-pop-up/pop-up.svg"
						alt="illustration d'une femme avec des coeurs en forme de ballon"
					/>
				</figure>
				<ul>
					<li>
						<Link to="profil.html" id="profile-link">
							<h3>Voir mon profil</h3>
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default PopUpInscription;
