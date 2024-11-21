import { Link } from "react-router-dom";
const ProfilDonsrecupere = () => {
	return (
		<div id="dons-container">
			<section class="don">
				<h2>Mes dons récupérés</h2>
				<ul class="donation">
					<li class="donation-date">
						<span class="date">14-08-2024:</span>
						<ul>
							<li>1 oignon</li>
							<li>3 tomates</li>
							<li>2 concombres</li>
							<li>pain</li>
						</ul>
					</li>
					<li class="donation-date">
						<span class="date">08-08-2024:</span>
						<ul>
							<li>1 melon</li>
							<li>2 yaourts</li>
							<li>1 bouteille de lait</li>
						</ul>
					</li>
					<li class="donation-date">
						<span class="date">17-07-2024:</span>
						<ul class="donation">
							<li>3 pêches</li>
							<li>2 carottes</li>
							<li>1 salade</li>
							<li>1 boîte de mais</li>
						</ul>
					</li>
				</ul>
				<Link to="/voir-dons" class="gift">
					Je réserve un don
				</Link>
			</section>
		</div>
	);
};

export default ProfilDonsrecupere;
