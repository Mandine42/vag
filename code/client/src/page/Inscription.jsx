import MainInscription from "../component/home/MainInscription";
import PopUpInscription from "../component/home/PopUpInscription";
import "../assets/CSS/inscription.css";
import "../assets/CSS/pop-up.css";
const Inscription = () => {
	return (
		<main id="inscription">
			<MainInscription />
			<PopUpInscription />
		</main>
	);
};

export default Inscription;
