const NotreMission = () => {
	return (
		<section id="notre-mission">
			<h2>Notre mission</h2>
			<div id="grille">
				<div id="titre">
					<h3>
						<span className="chiffre">10</span>
						<br />
						<span className="médium">
							Millions <br />
							de tonnes
						</span>
						<br />
						d’aliments jetés par an
					</h3>
					<h3>
						<span className="chiffre">29</span>
						<span className="médium">kg</span>
						<br />
						d’aliments jetés
						<br /> par an et par habitants
					</h3>
				</div>
				<div id="texte">
					<p>
						Nous c’est Laetitia, Philippe et Marie.
						<br />
						On habite dans différents quartiers de Montreuil et on a <br />
						décidé de dire{" "}
						<span className="couleur">stop au gaspillage alimentaire</span>.
					</p>
					<p>
						Notre mission, avec Voisins Anti-Gaspi,
						<br /> c’est de <span className="couleur">réduire</span> au maximum
						nos <br />
						déchets en rapprochant les gens et <br />
						ainsi faire vivre la vie d’un quartier.
					</p>
				</div>
			</div>
			<figure>
				<img
					src="asset/notre-mission.svg"
					alt="illustrations 2 personnes qui prennent un café"
				/>
			</figure>
		</section>
	);
};

export default NotreMission;
