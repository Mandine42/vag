import { Link } from "react-router-dom";
const MainContact = () => {
	return (
		<main>
			<h2 className="contact">Nous Contacter</h2>

			<div className="formulaire-wrapper">
				<figure>
					<img
						src="asset/img-pop-up/pop-up-contact.svg"
						alt="illustration de contact"
					/>
				</figure>

				<form action="contact" method="post">
					<input type="text" name="nom" placeholder="Votre nom" required />
					<input type="email" name="email" placeholder="Votre email" required />
					<textarea
						name="message"
						rows="4"
						placeholder="Votre message"
						required
					>
						Votre message
					</textarea>
					<Link to="envoyer">Envoyer</Link>
				</form>
			</div>
		</main>
	);
};

export default MainContact;
