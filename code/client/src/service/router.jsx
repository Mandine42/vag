import { createBrowserRouter } from "react-router-dom";
import Accueil from "../page/Accueil";
import FormulaireContact from "../page/FormulaireContact";
import Cgu from "../page/Cgu";
import ConditionInscription from "../page/ConditionInscription";
import Collect from "../page/Collect";
import BaseLayout from "../layout/BaseLayout";
import Connexion from "../page/Connexion";
import DetailCompte from "../page/DetailCompte";
import Fonctionnement from "../page/Fonctionnement";
import Hygiene from "../page/Hygiene";
import Inscription from "../page/Inscription";
import MentionLegales from "../page/MentionsLegales";
import Parametre from "../page/Parametre";
import PlanSite from "../page/PlanSite";
import Profil from "../page/Profil";
import VoirDons from "../page/VoirDons";
import FormulaireDons from "../page/FormulaireDons";
import LogoutPage from "../page/LogoutPage";
import AdminHomePage from "../page/admin/AdminHomePage";
import AdminCollectPage from "../page/admin/AdminCollectPage";
import AdminCollectFormPage from "../page/admin/AdminCollectFormPage";
import Guard from "../component/common/Guard";
import AdminContact from "../page/admin/AdminContact";

const router = createBrowserRouter([
	/*
    path: route
    element: composant relié à la route
    */
	{
		// route / est considérée comme la page d'accueil
		//préfixe pour les routes enfants
		path: "/",
		// mise en page utilisée par les pages enfants
		element: <BaseLayout />,
		children: [
			{
				path: "",
				element: <Accueil />,
			},
			{
				path: "contact",
				element: <FormulaireContact />,
			},
			{
				path: "cgu",
				element: <Cgu />,
			},
			{
				path: "inscription",
				element: <ConditionInscription />,
			},
			{
				path: "collect",
				element: <Collect />,
			},
			{
				path: "connexion",
				element: <Connexion />,
			},
			{
				path: "detail-compte",
				element: <DetailCompte />,
			},
			{
				path: "fonctionnement",
				element: <Fonctionnement />,
			},
			{
				path: "hygiene",
				element: <Hygiene />,
			},
			{
				path: "formulaire-inscription",
				element: <Inscription />,
			},
			{
				path: "mentions-legales",
				element: <MentionLegales />,
			},
			{
				path: "parametre",
				element: <Parametre />,
			},
			{
				path: "plan-site",
				element: <PlanSite />,
			},
			{
				path: "profil",
				element: <Profil />,
			},
			{
				path: "voir-dons",
				element: <VoirDons />,
			},
			{
				path: "dons",
				element: <FormulaireDons />,
			},
			{
				path: "logout",
				element: <LogoutPage />,
			},
		],
	},
	{
		path: "/admin/",
		element: (
			<Guard roleArray={["admin"]}>
				<BaseLayout />,
			</Guard>
		),
		children: [
			{
				path: "",
				element: <AdminHomePage />,
			},
			{
				path: "collect/:id?",
				element: <AdminCollectPage />,
			},
			{
				//créer une variable de route : utiliser :<nom de la variable>
				// ? : variable optionnel
				path: "collect/form/:id?",
				element: <AdminCollectFormPage />,
			},
			{
				path: "contact",
				element: <AdminContact />,
			},
		],
	},
]);

export default router;
