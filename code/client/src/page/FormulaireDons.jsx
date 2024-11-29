import FormDons from "../component/home/FormDons";
import FormDonsQuartier from "../component/home/FormDonsQuartier";
import FormulaireDonsComment from "../component/home/FormulaireDonsComment";
import FormulaireDonsDate from "../component/home/FormulaireDonsDate";
import FormulaireProduits from "../component/home/FormulaireProduits";
import ValidationDons from "../component/home/ValidationDons";

const FormulaireDons = () => {
	return (
		<main id="formulaire-dons">
			{" "}
			<FormDons />
			{/* <FormulaireProduits /> */}
			<FormDonsQuartier />
			<FormulaireDonsDate />
			<FormulaireDonsComment />
			<ValidationDons />
		</main>
	);
};

export default FormulaireDons;
