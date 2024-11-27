// import "../../assets/js/caroussel.js";
// const Carrousel = () => {
// 	return (
// 		<section id="carrousel">
// 			<h2>Ton quartier</h2>
// 			<figure>
// 				<img
// 					className="img"
// 					src="asset/img-caroussel/ton-quartier.svg"
// 					alt="carte découpée en quartier"
// 				/>
// 			</figure>

// 			<div className="menu-point">
// 				<span className="dot active" data-slide="0" />
// 				<span className="dot" data-slide="1" />
// 				<span className="dot" data-slide="2" />
// 				<span className="dot" data-slide="3" />
// 			</div>
// 		</section>
// 	);
// };

// export default Carrousel;
import React, { useState } from "react";

const Carrousel = () => {
	const images = [
		{ src: "ton-quartier.svg", title: "Ton Quartier" },
		{ src: "les-dons.svg", title: "Les Dons" },
		{ src: "calendrier.svg", title: "Réserve" },
		{ src: "connecte-toi.svg", title: "Connecte-toi" },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [touchStartX, setTouchStartX] = useState(0);

	// Naviguer vers une image spécifique (clic sur un point)
	const handleDotClick = (index) => {
		setCurrentIndex(index);
	};

	// Enregistrer la position initiale du swipe (touchstart)
	const handleTouchStart = (e) => {
		setTouchStartX(e.changedTouches[0].screenX);
	};

	// Gérer la fin du swipe (touchend)
	const handleTouchEnd = (e) => {
		const touchEndX = e.changedTouches[0].screenX;
		const swipeDistance = touchEndX - touchStartX;
		const minSwipeDistance = 50; // Distance minimum pour détecter un swipe

		if (swipeDistance > minSwipeDistance) {
			// Swipe vers la droite
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? images.length - 1 : prevIndex - 1,
			);
		} else if (swipeDistance < -minSwipeDistance) {
			// Swipe vers la gauche
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}
	};

	return (
		<section
			id="carrousel"
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			<h2>{images[currentIndex].title}</h2>
			<figure>
				<img
					className="img"
					src={`asset/img-caroussel/${images[currentIndex].src}`}
					alt={images[currentIndex].title}
				/>
			</figure>

			<div className="menu-point">
				{images.map((_, index) => (
					<span
						key={index}
						className={`dot ${index === currentIndex ? "active" : ""}`}
						onClick={() => handleDotClick(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default Carrousel;
