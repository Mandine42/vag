import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/CSS/voir-dons.css";

const PopUpReservationDons = ({ onClose, donation }) => {
	return (
		<div id="popup4" className={`popup4 ${donation ? "" : "hidden"}`}>
			<section className="popup-content4">
				<span className="close" id="close-popup4" onClick={onClose}>
					&times;
				</span>
				<h2>Félicitations !</h2>
				<h3>Votre don a bien été réservé</h3>
				<p>
					<strong>Don réservé :</strong> {donation?.title}
				</p>
				<figure>
					<img
						src="asset/img-pop-up/pop-up-dons.svg"
						alt="illustration d'un personnage qui fait un don"
					/>
				</figure>
				<Link to="/profil">Voir mon profil</Link>
			</section>
		</div>
	);
};

const ListeDons = () => {
	// État pour gérer l'affichage du pop-up
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [selectedDonation, setSelectedDonation] = useState(null);

	// Données des dons (simulées ici, mais elles peuvent venir d'une API)
	const donations = [
		{
			id: 1,
			title: "Don à récupérer",
			location: "Rue des Champs, Montreuil",
			date: "28/11/2024",
			articles: ["3 carottes", "2 concombres", "1 pamplemousse"],
			comment: "Frais du jour, à récupérer rapidement.",
		},
		{
			id: 2,
			title: "Don à récupérer",
			location: "Place de la Mairie, Montreuil",
			date: "28/11/2024",
			articles: ["2 yaourts grecs", "1 fromage blanc"],
			comment: "Les yaourts expirent dans 2 jours.",
		},
		{
			id: 3,
			title: "Don à récupérer",
			location: "Rue de Paris, Montreuil",
			date: "27/11/2024",
			articles: ["2 saucisses", "1 steak haché"],
			comment: "Congelé, emballage intact.",
		},
		{
			id: 4,
			title: "Don à récupérer",
			location: "Rue des Fleurs, Montreuil",
			date: "26/11/2024",
			articles: ["1 sauce tomate", "1 boîte de haricots verts"],
			comment: "Conserves en parfait état.",
		},
		{
			id: 5,
			title: "Don à récupérer",
			location: "Rue Victor Hugo, Montreuil",
			date: "25/11/2024",
			articles: ["1 baguette", "2 croissants"],
			comment: "À consommer aujourd'hui.",
		},
	];

	// Fonction pour ouvrir le pop-up
	const handleReserve = (donation) => {
		setSelectedDonation(donation);
		setIsPopupVisible(true);
	};

	// Fonction pour fermer le pop-up
	const closePopup = () => {
		setIsPopupVisible(false);
		setSelectedDonation(null);
	};

	return (
		<>
			<div>
				<h1>Liste des Dons</h1>

				{/* Liste des dons */}
				<ul id="donation-list">
					{donations.map((donation) => (
						<li key={donation.id} className="donation-item">
							<h3 className="donation">{donation.title}</h3>
							<p>
								<strong>Mon quartier :</strong> {donation.location}
							</p>
							<p>
								<strong>Date :</strong> {donation.date}
							</p>
							<p>
								<strong>Liste des articles :</strong>
							</p>
							<ul>
								{donation.articles.map((article, index) => (
									<li key={index}>{article}</li>
								))}
							</ul>
							<p>
								<strong>Commentaire :</strong> {donation.comment}
							</p>
							<button
								type="button"
								className="reserve-donation"
								onClick={() => handleReserve(donation)}
							>
								Réserver ce don
							</button>
						</li>
					))}
				</ul>
			</div>

			{/* Pop-up de réservation */}
			{isPopupVisible && (
				<PopUpReservationDons
					donation={selectedDonation}
					onClose={closePopup}
				/>
			)}
		</>
	);
};

export default ListeDons;
