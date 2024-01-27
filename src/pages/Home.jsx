import React, { useContext, useEffect, useState } from "react";
import { Sort } from "../components/Sort";
import { Categories } from "../components/Categories";
import PizzaBLock from "../components/PizzaBlock/PizzaBLock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Paginnation from "../components/Paginnation/Paginnation";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

export default function Home() {
	const dispatch = useDispatch();
	const { categoryId, sort } = useSelector((state) => state.filter);
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
	const [curPage, setCurPage] = useState(1);

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
	useEffect(() => {
		try {
			setIsLoading(false);
			const search = searchValue ? `search=${searchValue}` : "";

			fetch(
				`https:65aeab521dfbae409a75506c.mockapi.io/items?page=${curPage}&limit=4&${
					categoryId > 0 ? `category=${categoryId}` : ""
				}${search}&sortBy=${sortType.sortProperty}&order=${sortType.how}`
			)
				.then((res) => res.json())
				.then((arr) => (arr === "Not found" ? setItems([]) : setItems(arr)))
				.then(() => setIsLoading(true));
		} catch (error) {
			console.log(error);
		}
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, curPage]);
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
			<Paginnation setCurPage={setCurPage}></Paginnation>
		</div>
	);
}
