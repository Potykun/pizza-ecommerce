import { Sort } from "./components/Sort";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import "./scss/app.scss";

import React from "react";
import PizzaBLock from "./components/PizzaBLock";

function App() {
	return (
		<div class="wrapper">
			<Header></Header>
			<div class="content">
				<div class="container">
					<div class="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 class="content__title">Все пиццы</h2>
					<div class="content__items">
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
