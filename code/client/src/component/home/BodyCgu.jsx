import { Link } from "react-router-dom";
const BodyCgu = () => {
	return (
		<>
			<h1 id="conditions">Conditions Générales d'Utilisation (CGU)</h1>

			<p>Date de mise à jour : 23 septembre 2024</p>

			<h2 className="condition">1. Objet</h2>
			<p>
				Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont
				pour objet de définir les modalités d'accès et d'utilisation du site{" "}
				<strong>Voisins anti-gaspi</strong> (ci-après « le Site »), accessible à
				l'adresse <Link to="voisinsantigaspi.fr">voisinsantigaspi.fr</Link>.
			</p>
			<p>
				En utilisant le Site, vous acceptez sans réserve les présentes CGU. Si
				vous ne souhaitez pas accepter ces conditions, veuillez ne pas utiliser
				le Site.
			</p>

			<h2 className="condition">2. Définitions</h2>
			<ul>
				<li>
					<strong>Utilisateur</strong> : toute personne accédant et naviguant
					sur le Site.
				</li>
				<li>
					<strong>Contenu</strong> : ensemble des informations, textes, images,
					vidéos, messages, et tout autre élément publié par l'Utilisateur ou
					l'Éditeur.
				</li>
				<li>
					<strong>Éditeur</strong> : l'équipe responsable de la gestion et de
					l'administration du Site.
				</li>
			</ul>

			<h2 className="condition">3. Accès au Site</h2>
			<p>
				L'accès au Site est gratuit. Toutefois, l'accès à certaines sections ou
				fonctionnalités peut nécessiter la création d'un compte utilisateur.
			</p>

			<h2 className="condition">4. Création de compte</h2>
			<p>
				Pour interagir avec la communauté (publier des annonces, participer aux
				discussions, etc.), l'Utilisateur doit créer un compte en fournissant
				des informations personnelles exactes et à jour. L'Utilisateur s'engage
				à ne pas créer plusieurs comptes ou usurper l'identité de tiers.
			</p>

			<h2 className="condition">5. Utilisation du Site</h2>
			<p>
				L'Utilisateur s'engage à utiliser le Site dans le respect des lois et
				réglementations en vigueur. Il est strictement interdit de :
			</p>
			<ul>
				<li>
					Publier des contenus injurieux, diffamatoires, discriminatoires ou
					contraires aux bonnes mœurs.
				</li>
				<li>Diffuser des informations fausses ou trompeuses.</li>
				<li>
					Violer les droits de propriété intellectuelle (textes, images, logos,
					etc.).
				</li>
				<li>
					Utiliser le Site à des fins commerciales sans l'accord explicite de
					l'Éditeur.
				</li>
			</ul>

			<h2 className="condition">6. Modération et suppression de contenu</h2>
			<p>
				L'Éditeur se réserve le droit de modérer, supprimer ou refuser tout
				contenu publié par un Utilisateur qui contreviendrait aux présentes CGU
				ou aux valeurs de la communauté.
			</p>

			<h2 className="condition">7. Propriété intellectuelle</h2>
			<p>
				Tous les contenus présents sur le Site, qu'ils soient créés par
				l'Éditeur ou les Utilisateurs, sont protégés par les lois relatives à la
				propriété intellectuelle. Toute reproduction ou exploitation sans
				autorisation est interdite.
			</p>

			<h2 className="condition">8. Responsabilité</h2>
			<p>
				L'Éditeur s'efforce de garantir la disponibilité et la sécurité du Site.
				Cependant, il ne saurait être tenu responsable en cas de :
			</p>
			<ul>
				<li>Interruptions temporaires pour maintenance ou mises à jour.</li>
				<li>Erreurs techniques indépendantes de sa volonté.</li>
				<li>Utilisation frauduleuse par des tiers.</li>
			</ul>
			<p>
				Les informations publiées par les Utilisateurs (conseils, recettes,
				initiatives locales) n'engagent que la responsabilité de leurs auteurs
				respectifs.
			</p>

			<h2 className="condition">9. Données personnelles</h2>
			<p>
				Conformément au RGPD, l'Utilisateur est informé que ses données
				personnelles sont collectées pour le bon fonctionnement du Site et la
				gestion de la communauté.
			</p>
			<p>
				Les données collectées ne sont en aucun cas cédées à des tiers sans le
				consentement explicite de l'Utilisateur, sauf obligations légales.
				L'Utilisateur dispose d'un droit d'accès, de rectification et de
				suppression de ses données personnelles en contactant l'Éditeur via
				l'adresse suivante :{" "}
				<Link to="voisinsantigaspi@gmail.com">voisinsantigaspi@gmail.com</Link>.
			</p>

			<h2 className="condition">10. Cookies</h2>
			<p>
				Le Site utilise des cookies pour améliorer l'expérience utilisateur et à
				des fins de statistiques. L'Utilisateur peut configurer son navigateur
				pour bloquer les cookies ou les supprimer.
			</p>

			<h2 className="condition">11. Liens hypertextes</h2>
			<p>
				Le Site peut contenir des liens vers des sites tiers. L'Éditeur décline
				toute responsabilité quant aux contenus de ces sites et aux pratiques de
				ces tiers en matière de protection des données.
			</p>

			<h2 className="condition">12. Modifications des CGU</h2>
			<p>
				L'Éditeur se réserve le droit de modifier les présentes CGU à tout
				moment. Les Utilisateurs seront informés des modifications via un avis
				publié sur le Site. Il est recommandé de consulter régulièrement les
				CGU.
			</p>

			<h2 className="condition">
				13. Droit applicable et juridiction compétente
			</h2>
			<p>
				Les présentes CGU sont régies par la législation française. En cas de
				litige, les tribunaux compétents seront ceux de la juridiction du siège
				social de l'Éditeur.
			</p>
		</>
	);
};

export default BodyCgu;
