import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./FullPizza.module.scss";
import { Link } from "react-router-dom";

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<{
		imageUrl: string;
		title: string;
		price: number;
	}>();
	const { id } = useParams();
	const navigate = useNavigate();
	// console.log(pizza);

	useEffect(() => {
		async function fetchPizzaOne() {
			try {
				const baseUrl = "https://65aeab521dfbae409a75506c.mockapi.io"; // Base URL
				const { data } = await axios.get(`${baseUrl}/items/` + id);
				setPizza(data);
			} catch (error) {
				alert("Error with pizza");
				navigate("/pizza-ecommerce/");
			}
		}
		fetchPizzaOne();
	}, []);
	if (!pizza) {
		return <div>Loading</div>;
	}
	return (
		<div className={style.container}>
			<img
				src={pizza.imageUrl}
				alt=""
			/>
			<div className={style.description}>
				<h2>{pizza.title}</h2>
				<h4>Price: {pizza.price} $</h4>
			</div>
			<div className="cart__bottom-buttons fullPage-btn">
				<Link
					className="button button--outline go-back-btn "
					to="/pizza-ecommerce/"
				>
					<svg
						width="8"
						height="14"
						viewBox="0 0 8 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 13L1 6.93015L6.86175 1"
							stroke="#D3D3D3"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>

					<span>Go back</span>
				</Link>
			</div>
		</div>
	);
};

export default FullPizza;
