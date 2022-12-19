import * as React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { IProduct, products } from "./ProductsData";

// // interface IState {
// // 	product?: IProduct;
// // 	added: boolean;
// // }

const ProductPage: React.FunctionComponent = () => {
	const routeParams = useParams();
	const { state } = useLocation();
	let navigate = useNavigate();
	const [added, setAdded] = React.useState(false);

	return (
		<div className="page-container">
			<button onClick={() => navigate(-1)}>Back</button>
			{routeParams ? (
				<React.Fragment>
					<h1>{state.name}</h1>
					<p>{state.description}</p>
					<p className="product-price">
						{new Intl.NumberFormat("en-US", {
							currency: "USD",
							style: "currency",
						}).format(state.price)}
					</p>
					{!added && (
						<button onClick={() => setAdded(true)}>Add to basket</button>
					)}
				</React.Fragment>
			) : (
				<p>Product not found!</p>
			)}
		</div>
	);
};
export default ProductPage;
