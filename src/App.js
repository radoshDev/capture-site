import React from "react";
import { Route, Switch, useLocation } from "react-router";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Navigation/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact component={AboutUs} />
					<Route path="/work" exact component={OurWork} />
					<Route path="/work/:id" component={MovieDetail} />
					<Route path="/contact" exact component={ContactUs} />
				</Switch>
			</AnimatePresence>
		</div>
	);
};

export default App;
