const ProfilQuartier = () => {
	return (
		<section id="quartier">
			<h2>Mon Quartier</h2>
			<article className="quartiers">
				<div className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Chez Louise"</p>
					<br />
					<p>53 rue du Capitaine Dreyfus</p>
				</div>
				<figure>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.82445439369!2d2.439074176177339!3d48.86155777133262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5b9e9a535b%3A0xd40a5cae36100cc3!2s53%20Rue%20du%20Capitaine%20Dreyfus%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1726758913219!5m2!1sfr!2sfr"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="plan"
						title="carte-quartier"
					/>
				</figure>
			</article>
		</section>
	);
};

export default ProfilQuartier;