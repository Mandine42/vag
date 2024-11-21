const MainHygiene = () => {
	return (
		<main>
			<h1>
				Règles concernant les aliments sur <span>VAG</span>
			</h1>

			<section className="info">
				<h3>Informations importantes</h3>

				<p>
					Si c'est de la nourriture que je pourrais manger, alors je peux la
					donner <br />
					Je respecte les règles sanitaires de base, et je lis bien la liste des
					aliments interdits ci-dessous
				</p>
			</section>
			<p>
				Bien entendu, afin de respecter certaines règles d'hygiène et de se
				conformer aux réglementations et pratiques existantes, il y a certains
				aliments qui ne peuvent être donnés.
			</p>

			<h3>Produits NON autorisés</h3>
			<ul>
				<li>
					Tout aliment périmé (dont la DLC - ou Date Limite de Consommation,
					généralement exprimée par la mention "À consommer jusqu'au" - serait
					dépassée)
				</li>
				<li>
					Pâtisseries réfrigérées à base de crème pâtissière, crème chantilly
				</li>
				<li>Coquillages, crustacés et huîtres</li>
				<li>Produits de poissonneries réfrigérées non préemballés</li>
				<li>Viandes réfrigérées non préemballées</li>
				<li>Steak haché réfrigéré, préemballé ou non</li>
				<li>Abats réfrigérés préemballés ou non</li>
				<li>Farces et produits farcis réfrigérés préemballés ou non</li>
			</ul>

			<h3>Produits acceptés</h3>
			<ul>
				<li>Les aliments qui sont encore bons à être consommés</li>
				<li>
					Les produits dont la DLUO (ou DDM) est dépassée (Date Limite
					d’Utilisation Optimale, généralement matérialisée sur les produits par
					la mention “À consommer de préférence avant”). En effet, un aliment
					dont la DLUO est dépassée ne présente pas de danger, cela signifie
					simplement qu’il peut perdre tout ou partie de ses qualités gustatives
					ou nutritives.
				</li>
				<li>
					Les produits surgelés/congelés (sans rupture de la chaîne du froid)
				</li>
				<li>
					Les produits faits maison (qui ne contiennent aucun des éléments cités
					dans les produits interdits)
				</li>
				<li>
					Les produits entamés (hors ceux devant être dans un emballage cités
					dans les produits interdits)
				</li>
			</ul>

			<h3>
				Exemples d'aliments acceptés sur <span>VAG</span>
			</h3>
			<ul>
				<li>Des fruits et légumes</li>
				<li>
					Des bons plats faits maison, par exemple préparés en trop grande
					quantité par vos voisins
				</li>
				<li>
					Des produits frais encore dans leur emballage (viande, fromage, etc.)
				</li>
				<li>Les pâtes, riz, et autres aliments secs</li>
				<li>Les conserves</li>
				<li>Les biscuits</li>
				<li>Les compotes</li>
				<li>Les céréales</li>
				<li>Des gâteaux sans crème pâtissière</li>
				<li>...</li>
			</ul>

			<p className="note">
				Note : En cas de doute sur la qualité de l'aliment, ne le mangez pas. Si
				un don vous semble suspect, n'hésitez pas à nous le signaler
				directement.
			</p>
		</main>
	);
};

export default MainHygiene;
