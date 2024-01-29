import { Header } from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import FullPizza from "./pages/FullPizza";

function App() {
	//
	return (
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
						path="/pizza/:id"
						element={<FullPizza></FullPizza>}
					></Route>
					<Route
						path="*"
						element={<NotFound></NotFound>}
					></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
