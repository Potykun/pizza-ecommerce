import { Header } from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	const [searchValue, setSearchValue] = useState();
	//
	return (
		<Router>
			<div className="wrapper">
				<Header
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				></Header>
				<Switch>
					<Route path="/card">
						<Card></Card>
					</Route>
					<Route path="/home">
						<Home
							searchValue={searchValue}
							setSearchValue={setSearchValue}
						></Home>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
