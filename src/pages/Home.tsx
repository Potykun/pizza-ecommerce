import React, { useEffect, useRef } from "react";
import { Sort, list } from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBLock from "../components/PizzaBlock/PizzaBLock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Paginnation from "../components/Paginnation/Paginnation";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice.js";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { fetchPizzas, selectPizzaItems, selectPizzaStatus } from "../redux/slices/pizzaSlice.js";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isSerched = useRef(false);
	const isMounted = useRef(false);

	const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
	const pizzaItems = useSelector(selectPizzaItems);
	const { status } = useSelector(selectPizzaStatus);

	const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i}></Skeleton>);

	const pizzas = pizzaItems.map((pizza: any, i: number) => (
		<PizzaBLock
			key={i}
			{...pizza}
		></PizzaBLock>
	));

	const onChangePage = (num: number) => {
		dispatch(setCurrentPage(num));
	};
	const onChangeCategory = (id: number) => {
		dispatch(setCategoryId(id));
	};

	const getPizzas = async () => {
		const search = searchValue ? `search=${searchValue}` : "";

		dispatch(
			// @ts-ignore
			fetchPizzas({ search, currentPage, categoryId, sort })
		);
	};

	useEffect(() => {
		if (window.location.search) {
			const params: any = qs.parse(window.location.search.substring(1));
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
							Error appear, Epmty <i>😕</i>
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
};
export default Home;
