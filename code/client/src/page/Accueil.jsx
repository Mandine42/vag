import Footer from "../component/common/Footer";
import Nav from "../component/common/Nav";
import NavSmartphone from "../component/common/NavSmartphone";
import Carrousel from "../component/home/Carrousel";
import Fonctionnement from "../component/home/Fonctionnement";
import NotreMission from "../component/home/NotreMission";
import Presentation from "../component/home/Presentation";
import "../assets/CSS/Accueil.css";
import "..//assets/CSS/carrousel.css";

const Accueil = () => {
	// Fragment : élément anonyme
	// retunr :<fragment></fragment>
	return (
		<>
			<Presentation />
			<NotreMission />
			<Fonctionnement />
			<Carrousel />
		</>
	);
};

export default Accueil;
