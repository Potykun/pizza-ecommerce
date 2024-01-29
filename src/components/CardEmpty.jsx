import React from "react";
import imageCart from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

export default function CardEmpty() {
	return (
		<div className="container container--cart">
			<div className="cart cart--empty">
				<h2>
					Корзина пустая <i>😕</i>
				</h2>
				<p>
					Вероятней всего, вы не заказывали ещё пиццу.
					<br />
					Для того, чтобы заказать пиццу, перейди на главную страницу.
				</p>
				<img
					src={imageCart}
					alt="Empty cart"
				></img>
				<Link
					to="/"
					className="button button--black"
				>
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>
	);
}
