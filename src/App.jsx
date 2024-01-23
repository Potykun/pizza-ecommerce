import { Header } from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	//
	return (
		<Router>
			<div className="wrapper">
				<Header></Header>
				<Switch>
					<Route path="/notfound">
						<NotFound></NotFound>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
