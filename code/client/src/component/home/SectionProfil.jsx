import { Link } from "react-router-dom";
const SectionProfil = () => {
	return (
		<section id="profil">
			<div id="profil-params">
				<h1>Mon Profil</h1>
				<figure role="figure">
					<Link to="" id="open-popup-link">
						<img
							className="params"
							src="asset/img-profil/Services.svg"
							alt="paramètre"
						/>
					</Link>
				</figure>
			</div>
			<figure>
				<img src="asset/img-profil/paul.png" alt="profil de Paul" />
			</figure>

			<h3>Paul</h3>
			<br />
			<p>paulmontreuil@gmail.com</p>
			<br />
			<p>Quartier Centre ville</p>
		</section>
	);
};

export default SectionProfil;
