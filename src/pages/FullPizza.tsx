import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<{
		imageUrl: string;
		title: string;
		price: number;
	}>();
	const { id } = useParams();
	const navigate = useNavigate();
	console.log(pizza);

	useEffect(() => {
		async function fetchPizzaOne() {
			try {
				const { data } = await axios.get(`https:65aeab521dfbae409a75506c.mockapi.io/items/` + id);
				setPizza(data);
			} catch (error) {
				alert("Error with pizza");
				navigate("/");
			}
		}
		fetchPizzaOne();
	}, []);
	if (!pizza) {
		return <div>Loading</div>;
	}
	return (
		<div className="container">
			<img
				src={pizza.imageUrl}
				alt=""
			/>
			<h2>{pizza.title}</h2>

			<h4>{pizza.price} $</h4>
		</div>
	);
};

export default FullPizza;
