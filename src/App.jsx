import { Sort } from "./components/Sort";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import "./scss/app.scss";

import React from "react";
import PizzaBLock from "./components/PizzaBLock";

function App() {
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
						<PizzaBLock
							title={"Mexico"}
							price={"350"}
						></PizzaBLock>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
