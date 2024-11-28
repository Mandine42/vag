import React, { useEffect, useState } from "react";
import { get_contacts } from "../../service/contact_api";

const AdminContact = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		const fetchContacts = async () => {
			const result = await get_contacts();
			setContacts(result.data);
		};
		fetchContacts();
	}, []);

	return (
		<div className="admin-contact">
			<h1 className="admin-contact-title">Liste des Contacts</h1>
			{Array.isArray(contacts) && contacts.length === 0 ? (
				<p className="admin-contact-empty">Aucun contact trouvé.</p>
			) : (
				<table className="admin-contact-table">
					<thead>
						<tr className="admin-contact-table-header">
							<th>ID</th>
							<th>Email</th>
							<th>Sujet</th>
							<th>Message</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map((contact) => (
							<tr key={contact.id} className="admin-contact-table-row">
								<td>{contact.id}</td>
								<td>{contact.email}</td>
								<td>{contact.subject}</td>
								<td>{contact.message}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default AdminContact;
