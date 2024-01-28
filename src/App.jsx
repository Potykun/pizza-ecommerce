import { Header } from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

export const SearchContext = createContext();

function App() {
	const [searchValue, setSearchValue] = useState();
	//
	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			<BrowserRouter>
				<div className="wrapper">
					<Header></Header>
					<Routes>
						<Route
							path="/card"
							element={<Card></Card>}
						></Route>
						<Route
							path="/"
							element={<Home></Home>}
						></Route>
						<Route
							path="*"
							element={<NotFound></NotFound>}
						></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</SearchContext.Provider>
	);
}

export default App;
