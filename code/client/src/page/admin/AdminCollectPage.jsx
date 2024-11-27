import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectAllCollect } from "../../service/collect_api";
import NoticeMessage from "../../component/common/NoticeMessage";
import "../../assets/CSS/admin-collect-page.css";

const AdminCollectPage = () => {
	const [collect, setCollect] = useState([]);
	// detecter des moments de vie du composant
	useEffect(() => {
		selectAllCollect().then((results) => setCollect(results.data));
	}, []);

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
								<Link className="btn-admin" to={"#"}>
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
