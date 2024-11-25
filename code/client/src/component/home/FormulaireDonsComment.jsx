import { useState } from "react";

const FormulaireDonsComment = () => {
	const [message, setMessage] = useState(""); // État pour gérer le contenu du commentaire
	// const [comments, setComments] = useState([]); // État pour gérer la liste des commentaires
	return (
		<fieldset class="commentaire">
			<legend id="commentaire">Je laisse un commentaire</legend>

			<label for="msg" class="label-commentaire">
				Votre Message
			</label>
			<textarea
				name="message"
				id="msg"
				maxLength="2000"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Entrez votre message ici..."
			/>
			<p>Limite de 2000 caractères</p>
			<button type="button" id="validate-comment">
				Valider le commentaire
			</button>

			<div id="comment" />
		</fieldset>
	);
};

export { FormulaireDonsComment };
// import { useState } from "react";

// const FormulaireDonsComment = () => {
// 	const [message, setMessage] = useState(""); // État pour gérer le contenu du commentaire
// 	const [comments, setComments] = useState([]); // État pour gérer la liste des commentaires

// 	const handleValidateComment = () => {
// 		// Vérifier que le commentaire n'est pas vide
// 		if (!message.trim()) {
// 			alert("Le commentaire est vide.");
// 			return;
// 		}

// 		// Ajouter le commentaire à la liste
// 		setComments((prevComments) => [...prevComments, message]);

// 		// Réinitialiser le champ de saisie
// 		setMessage("");
// 	};

// 	return (
// 		<fieldset className="commentaire">
// 			<legend id="commentaire">Je laisse un commentaire</legend>

// 			<label htmlFor="msg" className="label-commentaire">
// 				Votre Message
// 			</label>

// 			{/* Zone de texte contrôlée */}
// 			<textarea
// 				name="message"
// 				id="msg"
// 				maxLength="2000"
// 				value={message}
// 				onChange={(e) => setMessage(e.target.value)}
// 				placeholder="Entrez votre message ici..."
// 			/>

// 			<p>Limite de 2000 caractères</p>
// 			<button
// 				type="button"
// 				id="validate-comment"
// 				onClick={handleValidateComment}
// 			>
// 				Valider le commentaire
// 			</button>

// 			{/* Afficher les commentaires ajoutés */}
// 			<div id="comment">
// 				<h3>Commentaires :</h3>
// 				{comments.length > 0 ? (
// 					<ul>
// 						{comments.map((comment, index) => (
// 							<li key={index}>{comment}</li> // Utiliser "index" comme clé car la liste n'est pas persistante
// 						))}
// 					</ul>
// 				) : (
// 					<p>Aucun commentaire pour le moment.</p>
// 				)}
// 			</div>
// 		</fieldset>
// 	);
// };

export default FormulaireDonsComment;
