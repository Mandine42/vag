import { Link } from "react-router-dom";
const MainCollect = () => {
	return (
		<main>
			<h1 id="collect">Points de collecte</h1>
			<h3 id="quartier">Sélectionne ton quartier</h3>

			<section className="quartier">
				<Link to="" className="quartier-link">
					<h2>Bas-Montreuil - République</h2>
				</Link>
				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Arsène"</p>
					<br />
					<p>54 rue Robespière</p>
				</article>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5250.534659480077!2d2.4208590761282447!3d48.853112501078336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6729d36dd8f1d%3A0xdd197fe08f0532ca!2s54%20Rue%20Robespierre%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727088744158!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" className="quartier-link">
					<h2>Bobillot</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Devant la boulangerie"</p>
					<br />
					<p>17 rue Sergent Godefroy</p>
				</article>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.232374941594!2d2.4324234000000065!3d48.8537791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6729fc4cad743%3A0x506d68c45452680!2s17%20Rue%20du%20Sergent%20Godefroy%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727089294062!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" class="quartier-link">
					<h2>La Noue - Clos français</h2>
				</Link>
				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Devant le garage Opel"</p>
					<br />
					<p>2 rue Maurice Chevalier</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6714860370244!2d2.4336505!3d48.8644745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d67daf3117b%3A0xae5082e3dd459290!2sRue%20Maurice%20Chevalier%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727089535992!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" className="quartier-link">
					<h2>Villiers - Barbusse</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Chez Sandra"</p>
					<br />
					<p>83 Bd Henri Barbusse</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.47620177447!2d2.4414827999999913!3d48.86819790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d440b7c293d%3A0x3113958754d4bc53!2s83%20Bd%20Henri%20Barbusse%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727089727077!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" class="quartier-link">
					<h2>Solidarité - Carnot</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Brasserie Croix de Chavaux"</p>
					<br />
					<p>8 rue désirée Charton</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.531540608805!2d2.450753800000009!3d48.867142799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d4ef21236e9%3A0x1af09451d7386c42!2s8%20Rue%20D%C3%A9sir%C3%A9%20Charton%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727089873733!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte quartier"
				/>
			</section>
			<section className="quartier">
				<Link to="" class="quartier-link">
					<h2>Centre Ville</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Chez Louise"</p>
					<br />
					<p>53 rue du Capitaine Dreyfus</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.82445439369!2d2.439074176177339!3d48.86155777133262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5b9e9a535b%3A0xd40a5cae36100cc3!2s53%20Rue%20du%20Capitaine%20Dreyfus%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1726758913219!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>
			<section className="quartier">
				<Link to="" class="quartier-link">
					<h2>Jean Moulin - Beaumonts</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Biocoop"</p>
					<br />
					<p>6 place Jean-Jaurès</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.536485876064!2d2.4426543000000054!3d48.86262960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5b10c69c1f%3A0x51e8e1ec90239743!2s6%20Pl.%20Jean%20Jaur%C3%A8s%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727090045226!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" class="quartier-link">
					<h2>Ramenas - Léo Lagrange</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Devant la laverie"</p>
					<br />
					<p>28 rue Galillée</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.8279368220155!2d2.449314400000002!3d48.85985089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5124f48499%3A0x8c100b69286021b9!2s28%20Rue%20Galil%C3%A9e%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727090311000!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" className="quartier-link">
					<h2>Branly - Boissière</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Devant Proxi"</p>
					<br />
					<p>15 Av du Colonel Fabien</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1299349123574!2d2.4490848999999995!3d48.87479949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d37dca9076d%3A0x43a4ce91bcbd890b!2s15%20Av.%20du%20Colonel%20Fabien%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727090565540!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" class="quartier-link">
					<h2>Bel Air-Grands Pêchers-Renan</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Devant le tabac"</p>
					<br />
					<p>115 rue Edouard Branly</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.215345676338!2d2.4622021999999997!3d48.873171199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e612b58d19315f%3A0x3eb9e86afb50e0c5!2s115%20Rue%20Edouard%20Branly%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727090699777!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" class="quartier-link">
					<h2>Signac - Murs à pêches</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Chez Patrice"</p>
					<br />
					<p>78 rue Anatole France</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8119292371907!2d2.4618438!3d48.8617966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e612adc9adeb21%3A0x9db24d3e12ef8632!2sRue%20Anatole%20France%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727090853087!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" class="quartier-link">
					<h2>Ruffins - Théophile Sueur</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Chez Corinco"</p>
					<br />
					<p>9 rue des Ruffins</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.641637036492!2d2.469891399999992!3d48.86162710000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e612a573c9f9e3%3A0x3c54de4097b0e338!2s9%20Rue%20des%20Ruffins%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727090985591!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>

			<section className="quartier">
				<Link to="" className="quartier-link">
					<h2>Montreau - Le Morillon</h2>
				</Link>

				<article className="quartier-info">
					<h3>Mon point de collecte:</h3>
					<br />
					<p>"Devant la statue"</p>
					<br />
					<p>14 place Margherite et Emile Morillon</p>
				</article>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.654446177373!2d2.4783954000000046!3d48.864799400000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e612bd162997f1%3A0x80cfcf82a19d8712!2s14%20Pl.%20le%20Morillon%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727091172011!5m2!1sfr!2sfr"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					className="plan"
					title="carte-quartier"
				/>
			</section>
		</main>
	);
};

export default MainCollect;
