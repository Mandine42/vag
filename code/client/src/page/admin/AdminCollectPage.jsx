import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectAllCollect, deleteCollect } from "../../service/collect_api";
import NoticeMessage from "../../component/common/NoticeMessage";
import "../../assets/CSS/admin-collect-page.css";
import { authUser } from "../../service/user_api";
import { UserContexte } from "../../provider/UserProvider";

const AdminCollectPage = () => {
	const [collect, setCollect] = useState([]);

	const { id } = useParams();
	const { user, setUser } = useContext(UserContexte);
	const navigate = useNavigate();
	// detecter des moments de vie du composant
	useEffect(() => {
		selectAllCollect().then((results) => setCollect(results.data));
		// si la variable de route existe : supprimer un point de collecte
		if (id) remove(id);
	}, [id]);

	const remove = async (id) => {
		const authentification = await authUser(user);
		const results = await deleteCollect(authentification.data.token, id);
		if (results.status === 200) {
			window.sessionStorage.removeItem("notice");
			window.sessionStorage.setItem("notice", "Collecte supprimée");
			navigate("/admin/collect");
			return;
		}
	};

	return (
		<main>
			<h1>Collecte</h1>
			<Link className="btn-admin" to={"/admin/collect/form"}>
				Ajout d'un point de collecte
			</Link>

			<NoticeMessage />

			<table>
				<thead>
					<tr>
						<th>Adresse</th>
						<th>Point de collecte</th>
						<th>Iframe</th>
						<th>Nom du quatier</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{collect.map((data) => (
						<tr key={Math.random()}>
							<td>{data.adress}</td>
							<td>{data.meeting_point}</td>
							{/* Pour récuperer un tableau dans la base
							<ul>{data.otions.map(item => <li> key={Math.random()}>{item.name}</li>)}</ul> */}

							<td>
								{" "}
								<iframe
									src={data.iframe}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									className="plan"
									title="carte-quartier"
								/>
							</td>
							<td>{data.district.name}</td>
							<td className="td-admin">
								<Link
									className="btn-admin"
									to={`/admin/collect/form/${data.id}`}
								>
									Modifié
								</Link>
								<br />
								<Link className="btn-admin" to={`/admin/collect/${data.id}`}>
									Supprimé
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
};

export default AdminCollectPage;
