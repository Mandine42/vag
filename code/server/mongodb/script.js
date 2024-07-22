/*
Selectionner la base de données dans mongo shell avant de charger le fichier
use garage
load('script.js')=source en mysql
db.contact.find()=afficher ce qu'il y a sur la bas (Select de mysql)
 db.contact.drop()=supprimer la collection

*/

// insérer des documents dans la collection contact

db.contact.insertMany([
	{
		email: "clementine.porto@gmail.com",
		subject: "Nouveau lieu pour le quartier Bel-Air",
		message:
			"Bonjour, je suis propriètaire d'un tiers lieu rue de Rosny qui pourrait vous interesser.",
		date: "2024-9-25",
	},
	{
		email: "alfred.pichon@gmail.com",
		subject: "Participation",
		message:
			"Je tiens un restaurant dans le quartier robespiere et j'aimerais faire profiter les gens de mon quartier à venir chercher mes anti-gaspi",
		date: "2024-10-06",
	},
]);
