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
import FormulaireDons from "../component/home/FormulaireDons";
import LogoutPage from "../page/LogoutPage";
import AdminHomePage from "../page/admin/AdminHomePage";
import AdminDonsPage from "../page/admin/AdminDonsPage";
import AdminDonsFormPage from "../page/admin/AdminDonsFormPage";
import AdminRoute from "../component/admin/AdminRoute";

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
		path: "/admin",
		element: <AdminRoute />,
		children: [
			{
				path: "",
				element: <AdminHomePage />,
			},
			{
				path: "dons",
				element: <AdminDonsPage />,
			},
			{
				path: "dons/form",
				element: <AdminDonsFormPage />,
			},
		],
	},
]);

export default router;
