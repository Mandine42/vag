import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserContexte } from "../../provider/UserProvider";
const SectionProfil = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// uneNavigate permet de changer de route
	const navigate = useNavigate();
	// useContext permet d'accéder aux données stockées dans un contexte
	const { user, setUser } = useContext(UserContexte);

	const submit = async (data) => {
		// console.log(data);
		// enregistrer l'utilisateur
		const results = await loginUser(data);
		// si l'enregestriment a été effectué
		if (results.status === 200) {
			// stocker le message dans la session
			window.sessionStorage.setItem("notice", "Vous êtes bien connecté");
			// stocker l'utilisateur dans le contexte
			setUser(results.data);
			// redirection vers une route
			navigate("/profil");
		}
	};
	return (
		<section id="profil">
			<div id="profil-params-profil">
				<h1>Mon Profil</h1>
				<figure role="figure">
					<Link to="" id="open-popup-link">
						<img
							className="params"
							src="/asset/img-profil/Services.svg"
							alt="paramètre"
						/>
					</Link>
				</figure>
			</div>
			<figure>
				<img src="/asset/img-profil/profil2.svg" alt="profil de Paul" />
			</figure>

			<h3 id="user-lastname">{user.lastname}</h3>
			<br />
			<p className="profil-user">{user.email}</p>
			<br />
			<p className="profil-user">{user.district_id}</p>
		</section>
	);
};

export default SectionProfil;
