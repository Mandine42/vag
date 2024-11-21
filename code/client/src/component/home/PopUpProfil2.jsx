import { Link } from "react-router-dom";
const PopUpProfil2 = () => {
	return (
		<div className="popup1" id="popup1">
			<section className="popup-content1">
				<span className="close1" onclick="closePopup()">
					&times;
				</span>
				<h2 className="contact">Nous Contacter</h2>
				<div className="content-wrapper">
					<figure>
						<img
							src="asset/img-pop-up/pop-up-contact.svg"
							alt="illustration de contact"
						/>
					</figure>

					<form action="user" method="POST">
						<input type="text" name="nom" placeholder="Votre nom" required />
						<input
							type="email"
							name="email"
							placeholder="Votre email"
							required
						/>
						<textarea
							name="message"
							rows="4"
							placeholder="Votre message"
							required
						>
							45
						</textarea>
						<Link to="#">Envoyer</Link>
					</form>
				</div>
			</section>
		</div>
	);
};

export default PopUpProfil2;
