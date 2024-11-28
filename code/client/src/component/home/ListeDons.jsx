import React, { useState } from "react";
import "../../assets/CSS/voir-dons.css";
const ListeDons = () => {
	// État pour gérer l'affichage du pop-up
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [selectedDonation, setSelectedDonation] = useState(null);

	// Données des dons (simulées ici, mais elles peuvent venir d'une API)
	const donations = [
		{
			id: 1,
			title: "Don de Légumes",
			quantity: "5 kg",
			location: "Rue des Champs, Montreuil",
		},
		{
			id: 2,
			title: "Don de Fruits",
			quantity: "3 kg",
			location: "Place de la Mairie, Montreuil",
		},
		{
			id: 3,
			title: "Don de Conserves",
			quantity: "10 boîtes",
			location: "Rue de Paris, Montreuil",
		},
	];

	// Fonction pour ouvrir le pop-up avec les détails du don
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
		<div>
			<h1>Liste des Dons</h1>

			{/* Liste des dons */}
			<ul id="donation-list">
				{donations.map((donation) => (
					<li key={donation.id} className="donation-item">
						<h3>{donation.title}</h3>
						<p>
							<strong>Quantité :</strong> {donation.quantity}
						</p>
						<p>
							<strong>Lieu de collecte :</strong> {donation.location}
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
	);
};

export default ListeDons;
