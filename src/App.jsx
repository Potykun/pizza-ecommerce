import { Header } from "./components/Header";
import "./scss/app.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
	//
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header></Header>
				<Switch>
					<Route path="/cart">
						<NotFound></NotFound>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
