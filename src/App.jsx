import { Header } from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	//
	return (
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
	);
}

export default App;
