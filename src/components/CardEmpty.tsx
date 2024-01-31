import React from "react";
import imageCart from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

const CardEmpty: React.FC = () => {
	return (
		<div className="container container--cart">
			<div className="cart cart--empty">
				<h2>
					Your cart is empty <i>😕</i>
				</h2>
				<p>
					Most likely, you haven't ordered any pizzas yet.
					<br />
					To order pizza, go to the home page.
				</p>
				<img
					src={imageCart}
					alt="Empty cart"
				></img>
				<Link
					to="/"
					className="button button--black"
				>
					<span>Go back</span>
				</Link>
			</div>
		</div>
	);
};

export default CardEmpty;
