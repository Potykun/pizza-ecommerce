import { Header } from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const SearchContext = createContext(null);

function App() {
	const [searchValue, setSearchValue] = useState("");
	//
	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			<Router>
				<div className="wrapper">
					<Header></Header>
					<Switch>
						<Route path="/card">
							<Card></Card>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</div>
			</Router>
		</SearchContext.Provider>
	);
}

export default App;
