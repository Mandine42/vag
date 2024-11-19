const Presentation = () => {
	return (
		<section id="presentation">
			<figure>
				<img src="asset/accueil.svg" alt="groupe de personnes" />
			</figure>
			<div className="text-content">
				<div id="bulle1">
					<figure>
						<img src="asset/créer-du-lien.svg" alt="bulle créer du lien" />
					</figure>
					<figure>
						<img src="asset/partager.svg" alt="bulle partager" />
					</figure>
				</div>

				<h2>L'anti-gaspi</h2>
				<p>Entre voisins, c'est quoi?</p>

				<div id="bulle2">
					<figure>
						<img src="asset/echanger.svg" alt="bulle échanger" />
					</figure>
					<figure>
						<img src="asset/participer.svg" alt="bulle participer" />
					</figure>
					<figure>
						<img src="asset/se-rencontrer.svg" alt="bulle se renconter" />
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Presentation;
