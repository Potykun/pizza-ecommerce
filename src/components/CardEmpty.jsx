import React from "react";
import imageCart from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

export default function CardEmpty() {
	return (
		<div class="container container--cart">
			<div class="cart cart--empty">
				<h2>
					Корзина пустая <icon>😕</icon>
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
					class="button button--black"
				>
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>
	);
}
