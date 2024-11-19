import { Outlet } from "react-router-dom";
import Footer from "../component/common/Footer";
import Nav from "../component/common/Nav";
import NavSmartphone from "../component/common/NavSmartphone";

const BaseLayout = () => {
	return (
		<>
			<Nav />
			{/* zone remplie par la page ciblée par le routeur*/}
			<Outlet />
			<NavSmartphone />
			<Footer />
		</>
	);
};

export default BaseLayout;
