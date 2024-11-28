import { useEffect, useState } from "react";

const NoticeMessage = () => {
	const [notice, setNotice] = useState("");

	useEffect(() => {
		// récuperer la clé notice stockée dans la session storage
		if (window.sessionStorage.getItem("notice")) {
			// récupere la clé et l'affecter a l'etat
			setNotice(window.sessionStorage.getItem("notice"));
			// supprimer la clé notice
			window.sessionStorage.removeItem("notice");
		}
	}, []);

	return notice ? <p>{notice}</p> : <></>;
};

export default NoticeMessage;
