import * as React from "react";
import { IProduct, productsData } from "./ProductsData";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const ProductsPage: React.FunctionComponent = () => {
	const navigate = useNavigate();
	let [search, setSearch] = React.useState("");
	const [products, setProducts] = React.useState(productsData);
	const [searchParams, setSearchParams] = useSearchParams();
	const searchMe = searchParams.get("search");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};
	const handleSearchKeydown = (
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (event.key === "Enter") {
			setSearchParams({ search: event.currentTarget.value });
			setSearch(event.currentTarget.value);
			navigate(`/products?search=${search}`);
		}
	};
	return (
		<div className="page-container">
			<div className="search-container">
				<input
					type="search"
					placeholder="search"
					value={search}
					onChange={handleChange}
					onKeyDown={handleSearchKeydown}
				/>
			</div>
			<p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
			<ul className="product-list">
				{products.map((product: IProduct) => {
					if (
						!search ||
						(search &&
							product.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
					) {
						return (
							<li key={product.id} className="product-list-item">
								<Link to={`/products/${product.id}`} state={product}>
									{product.name}
								</Link>
							</li>
						);
					} else {
						return null;
					}
				})}
			</ul>
		</div>
	);
};

export default ProductsPage;
