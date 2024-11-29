import React, { useState } from "react";
import { Link } from "react-router-dom";

const ValidationDons = () => {
	const [isPopupVisible, setPopupVisible] = useState(false);

	// Fonction pour afficher le pop-up
	const handleValidateDonation = () => {
		setPopupVisible(true);
	};

	// Fonction pour fermer le pop-up
	const closePopup = () => {
		setPopupVisible(false);
	};

	return (
		<>
			{/* Bouton pour valider le don */}
			<button
				id="validate-donation"
				type="button"
				onClick={handleValidateDonation}
			>
				Valider mon don
			</button>

			{/* Pop-up */}
			{isPopupVisible && (
				<div id="popup3" className="popup3">
					<section className="popup-content3">
						<span className="close" id="close-popup3" onClick={closePopup}>
							&times;
						</span>
						<h2>Merci pour votre don !</h2>
						<figure>
							<img
								src="asset/img-pop-up/pop-up.svg"
								alt="illustration d'une femme avec des coeurs en forme de ballon"
							/>
						</figure>
						<ul>
							<li>
								<Link to="/voir-dons" id="don-link">
									<h3>Voir mon don</h3>
								</Link>
							</li>
						</ul>
					</section>
				</div>
			)}
		</>
	);
};

export default ValidationDons;
