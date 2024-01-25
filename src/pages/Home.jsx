import React, { useEffect, useState } from "react";
import { Sort } from "../components/Sort";
import { Categories } from "../components/Categories";
import PizzaBLock from "../components/PizzaBlock/PizzaBLock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export default function Home() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: "популярности",
		sort: "rating",
		how: "desk",
	});
	// console.log(sortType);

	useEffect(() => {
		try {
			setIsLoading(false);
			fetch(
				`https:65aeab521dfbae409a75506c.mockapi.io/items?${
					categoryId > 0 ? `category=${categoryId}` : ""
				}&sortBy=${sortType.sort}&order=${sortType.how}`
			)
				.then((res) => res.json())
				.then((arr) => (arr === "Not found" ? setItems([]) : setItems(arr)))
				.then(() => setIsLoading(true));
		} catch (error) {
			console.log(error);
		}
		window.scrollTo(0, 0);
	}, [categoryId, sortType]);
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories
						categoryId={categoryId}
						setCategoryId={(i) => setCategoryId(i)}
					/>
					<Sort
						sortType={sortType}
						setSortType={setSortType}
					/>
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
