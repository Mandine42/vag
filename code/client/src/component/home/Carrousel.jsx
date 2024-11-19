const Carrousel = () => {
	return (
		<section id="carrousel">
			<h2>Ton quartier</h2>
			<figure>
				<img
					className="img"
					src="asset/img-caroussel/ton-quartier.svg"
					alt="carte découpée en quartier"
				/>
			</figure>

			<div className="menu-point">
				<span className="dot active" data-slide="0" />
				<span className="dot" data-slide="1" />
				<span className="dot" data-slide="2" />
				<span className="dot" data-slide="3" />
			</div>
		</section>
	);
};

export default Carrousel;
