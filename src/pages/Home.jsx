import React, { useContext, useEffect, useRef, useState } from "react";
import { Sort, list } from "../components/Sort";
import { Categories } from "../components/Categories";
import PizzaBLock from "../components/PizzaBlock/PizzaBLock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Paginnation from "../components/Paginnation/Paginnation";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

export default function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isSerched = useRef(false);
	const isMounted = useRef(false);

	const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
	const pizzaItems = useSelector((state) => state.pizza.items);
	const { status } = useSelector((state) => state.pizza);

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	const { searchValue } = useContext(SearchContext);
	const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i}></Skeleton>);

	const pizzas = pizzaItems.map((pizza, i) => (
		<PizzaBLock
			key={i}
			{...pizza}
		></PizzaBLock>
	));

	const onChangePage = (num) => {
		dispatch(setCurrentPage(num));
	};

	const getPizzas = async () => {
		const search = searchValue ? `search=${searchValue}` : "";

		dispatch(fetchPizzas({ search, currentPage, categoryId, sort }));
	};

	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = list.find((obj) => obj.sortProperty === params.sort.sortProperty && obj.how === params.sort.how);
			dispatch(
				setFilters({
					...params,
					sort,
				})
			);
			isSerched.current = true;
		}
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		getPizzas();
		isSerched.current = false;
	}, [categoryId, sort, searchValue, currentPage]);

	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sort,
				categoryId,
				currentPage,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sort, currentPage]);

	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories
						categoryId={categoryId}
						setCategoryId={onChangeCategory}
					/>
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				{status === "error" ? (
					<div>
						<h2>
							Error appear, Epmty <icon>😕</icon>
						</h2>
					</div>
				) : (
					<div className="content__items">{status === "loading" ? skeleton : pizzas}</div>
				)}
			</div>
			<Paginnation
				currentPage={currentPage}
				setCurPage={onChangePage}
			></Paginnation>
		</div>
	);
}
