const PopUpReservationDons = () => {
	return (
		<div id="popup4" class="popup4 hidden">
			<section className="popup-content4">
				<span className="close" id="close-popup4">
					&times;
				</span>
				<h2>Félicitations !</h2>
				<h3>Votre don a bien été réservé</h3>
				<figure>
					<img
						src="asset/img-pop-up/pop-up-dons.svg"
						alt="illustration d'un personnage qui fait un don"
					/>
				</figure>
			</section>
		</div>
	);
};

export default PopUpReservationDons;
