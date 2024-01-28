import React, { useContext, useEffect, useState } from "react";
import { Sort } from "../components/Sort";
import { Categories } from "../components/Categories";
import PizzaBLock from "../components/PizzaBlock/PizzaBLock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Paginnation from "../components/Paginnation/Paginnation";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import axios from "axios";

export default function Home() {
	const dispatch = useDispatch();
	const { categoryId, sort, currentPage } = useSelector(
		(state) => state.filter
	);
	const sortType = sort;
	// const categoryId = useSelector((state) => {
	// 	return state.filter.categoryId;
	// });
	// const sortType = useSelector((state) => state.filter.sort);
	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	// const [curPage, setCurPage] = useState(1);

	const { searchValue } = useContext(SearchContext);
	const skeleton = [...new Array(6)].map((_, i) => (
		<Skeleton key={i}></Skeleton>
	));
	const pizzas = items.map((pizza, i) => (
		<PizzaBLock
			key={i}
			{...pizza}
		></PizzaBLock>
	));
	const onChangePage = (num) => {
		dispatch(setCurrentPage(num));
	};
	useEffect(() => {
		setIsLoading(false);
		const search = searchValue ? `search=${searchValue}` : "";

		axios
			.get(
				`https:65aeab521dfbae409a75506c.mockapi.io/items?page=${currentPage}&limit=4&${
					categoryId > 0 ? `category=${categoryId}` : ""
				}${search}&sortBy=${sortType.sortProperty}&order=${sortType.how}`
			)
			.then((res) => {
				// console.log(res);
				setItems(res.data);
				setIsLoading(true);
			});

		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, currentPage]);
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
				<div className="content__items">
					{!isLoading ? skeleton : pizzas}
				</div>
			</div>
			<Paginnation
				currentPage={currentPage}
				setCurPage={onChangePage}
			></Paginnation>
		</div>
	);
}
