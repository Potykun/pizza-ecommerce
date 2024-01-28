import React, { useContext, useEffect, useRef, useState } from "react";
import { Sort, list } from "../components/Sort";
import { Categories } from "../components/Categories";
import PizzaBLock from "../components/PizzaBlock/PizzaBLock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Paginnation from "../components/Paginnation/Paginnation";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import {
	setCategoryId,
	setCurrentPage,
	setFilters,
} from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";

export default function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isSerched = useRef(false);
	const isMounted = useRef(false);

	const { categoryId, sort, currentPage } = useSelector(
		(state) => state.filter
	);
	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
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

	const fetchPizzas = () => {
		setIsLoading(false);
		const search = searchValue ? `search=${searchValue}` : "";
		axios
			.get(
				`https:65aeab521dfbae409a75506c.mockapi.io/items?page=${currentPage}&limit=4&${
					categoryId > 0 ? `category=${categoryId}` : ""
				}${search}&sortBy=${sort.sortProperty}&order=${sort.how}`
			)
			.then((res) => {
				setItems(res.data);
				setIsLoading(true);
			});
	};

	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = list.find(
				(obj) =>
					obj.sortProperty === params.sort.sortProperty &&
					obj.how === params.sort.how
			);
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
		if (!isSerched.current) {
			fetchPizzas();
		}
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
