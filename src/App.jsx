import { Sort } from "./components/Sort";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import "./scss/app.scss";
import React, { useEffect, useState } from "react";
import PizzaBLock from "./components/PizzaBLock";

function App() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("https:65aeab521dfbae409a75506c.mockapi.io/items")
			.then((res) => res.json())
			.then((arr) => setItems(arr));
	}, []);
	//
	return (
		<div className="wrapper">
			<Header></Header>
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{items.map((pizza, i) => {
							return (
								<PizzaBLock
									key={i}
									// title={pizza.title}
									// price={pizza.price}
									// imageURL={pizza.imageUrl}
									// sizes={pizza.sizes}
									// types={pizza.types}
									{...pizza}
								></PizzaBLock>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
