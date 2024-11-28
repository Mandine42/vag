import FormDons from "../component/home/FormDons";
import FormDonsQuartier from "../component/home/FormDonsQuartier";
import FormulaireDonsComment from "../component/home/FormulaireDonsComment";
import FormulaireDonsDate from "../component/home/FormulaireDonsDate";
import FormulaireProduits from "../component/home/FormulaireProduits";

const FormulaireDons = () => {
	return (
		<main id="formulaire-dons">
			{" "}
			<FormDons />
			{/* <FormulaireProduits /> */}
			<FormDonsQuartier />
			<FormulaireDonsDate />
			<FormulaireDonsComment />
		</main>
	);
};

export default FormulaireDons;
