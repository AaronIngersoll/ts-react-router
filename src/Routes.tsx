import * as React from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";

import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const Routed: React.FunctionComponent = () => {
	const [loggedIn, setLoggedIn] = React.useState(true);
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="/products" replace />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/products/:id" element={<ProductPage />} />
				<Route
					path="/admin"
					element={loggedIn ? <AdminPage /> : <Navigate to="/login" replace />}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
};

export default Routed;
