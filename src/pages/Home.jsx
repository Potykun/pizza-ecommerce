import React, { useEffect, useState } from "react";
import { Sort } from "../components/Sort";
import { Categories } from "../components/Categories";
import PizzaBLock from "../components/PizzaBlock/PizzaBLock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export default function Home() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		fetch("https:65aeab521dfbae409a75506c.mockapi.io/items")
			.then((res) => res.json())
			.then((arr) => setItems(arr))
			.then(() => setIsLoading(true));
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{!isLoading
						? [...new Array(6)].map((_, i) => (
								<Skeleton key={i}></Skeleton>
						  ))
						: items.map((pizza, i) => (
								<PizzaBLock
									key={i}
									// title={pizza.title}
									// price={pizza.price}
									// imageURL={pizza.imageUrl}
									// sizes={pizza.sizes}
									// types={pizza.types}
									{...pizza}
								></PizzaBLock>
						  ))}
				</div>
			</div>
		</div>
	);
}
