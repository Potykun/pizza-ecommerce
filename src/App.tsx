import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";
import FullPizza from "./pages/FullPizza";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/app.scss";

function App() {
	//
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header></Header>
				<Routes>
					<Route
						path="/pizza-ecommerce/card"
						element={<Card></Card>}
					></Route>
					<Route
						path="/pizza-ecommerce/"
						element={<Home></Home>}
					></Route>
					<Route
						path="/pizza-ecommerce/pizza/:id"
						element={<FullPizza></FullPizza>}
					></Route>
					<Route
						path="/pizza-ecommerce/*"
						element={<NotFound></NotFound>}
					></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
