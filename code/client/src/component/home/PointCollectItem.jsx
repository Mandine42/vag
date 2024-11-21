import { Link } from "react-router-dom";

const PointCollectItem = ({ data }) => {
	return (
		<section className="quartier-collect">
			<Link to="" className="quartier-link">
				<h2>{data.name}</h2>
			</Link>
			<article className="quartier-info">
				<h3>Mon point de collecte:</h3>
				<br />
				<p>"Arsène"</p>
				<br />
				<p>54 rue Robespière</p>
			</article>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5250.534659480077!2d2.4208590761282447!3d48.853112501078336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6729d36dd8f1d%3A0xdd197fe08f0532ca!2s54%20Rue%20Robespierre%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1727088744158!5m2!1sfr!2sfr"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="plan"
				title="carte-quartier"
			/>
		</section>
	);
};

export default PointCollectItem;
