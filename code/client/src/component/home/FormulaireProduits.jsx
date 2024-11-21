const FormulaireProduits = ({ data }) => {
	return (
		<div className="form-group">
			<input
				type="checkbox"
				id={data.name}
				name="msg_fruits[]"
				value={data.name}
				className="input-fruit"
			/>
			<label htmlFor={data.name} className="label-fruit">
				{data.name}
			</label>
			<p className="product-description">{data.description}</p>{" "}
			{/* Affichage de la description */}
			<p className="product-category">Catégorie: {data.category.name}</p>
			<select
				className="quantity quantity-fruit"
				id="quantitySelect33"
				name="quantity33"
			>
				<option value="Non spécifiée">Quantité</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
		</div>
	);
};

export default FormulaireProduits;
