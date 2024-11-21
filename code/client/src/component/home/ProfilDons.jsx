import { Link } from "react-router-dom";

const ProfilDons = () => {
	return (
		<section class="don">
			<h2>Mes dons</h2>
			<ul className="donation">
				<li className="donation-date">
					<span className="date">07-08-2024:</span>
					<ul>
						<li>1 oignon</li>
						<li>1 brique de lait</li>
						<li>1 boîte de café</li>
						<li>pains suédois</li>
					</ul>
				</li>
				<li className="donation-date">
					<span class="date">04-08-2024:</span>
					<ul>
						<li>1 salade</li>
						<li>2 tomates</li>
						<li>1 fromage</li>
					</ul>
				</li>
				<li className="donation-date">
					<span className="date">31-07-2024:</span>
					<ul>
						<li>1 boîte de thon</li>
						<li>1 pastèque</li>
						<li>1 melon</li>
						<li>1 bouteille de jus</li>
					</ul>
				</li>
			</ul>

			<Link to="gift" href="/formulaire-dons">
				Je fais un don
			</Link>
		</section>
	);
};

export default ProfilDons;
