import ProfilDons from "../component/home/ProfilDons";
import ProfilDonsrecupere from "../component/home/ProfilDonsRecupere";
import ProfilQuartier from "../component/home/ProfilQuartier";
import SectionProfil from "../component/home/SectionProfil";
import "../assets/CSS/profil.css";
import "../assets/CSS/pop-up-formulaire-contact.css";
import "../assets/CSS/parametre.css";
const Profil = () => {
	return (
		<>
			<SectionProfil />
			<ProfilDonsrecupere />
			<ProfilDons />
			<ProfilQuartier />
		</>
	);
};

export default Profil;
