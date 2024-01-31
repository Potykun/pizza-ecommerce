import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSort } from "../redux/slices/filterSlice";

type SortListType = {
	name: string;
	sortProperty: "rating" | "title" | "price";
	how: "desc" | "asc";
};

export const list: SortListType[] = [
	{ name: "popular", sortProperty: "rating", how: "desc" },
	{ name: "popular", sortProperty: "rating", how: "asc" },
	{ name: "price ", sortProperty: "price", how: "desc" },
	{ name: "price ", sortProperty: "price", how: "asc" },
	{ name: "name", sortProperty: "title", how: "desc" },
	{ name: "name", sortProperty: "title", how: "asc" },
];
export function Sort() {
	const sortRef = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const sort = useSelector(selectSort);
	const [open, setOpen] = useState(false);

	const onClickSelect = (obj: SortListType) => {
		dispatch(setSort(obj));
		setOpen(false);
	};

	useEffect(() => {
		const handleClickOutside: EventListenerOrEventListenerObject = (event: Event) => {
			if (sortRef.current && !event.composedPath?.().includes(sortRef.current)) {
				setOpen(false);
			}
		};
		document.body.addEventListener("click", handleClickOutside);
		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div
			ref={sortRef}
			className="sort"
		>
			<div className="sort__label">
				<svg
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"
					/>
				</svg>
				<b>Sort by:</b>
				<span onClick={() => setOpen((prev) => !prev)}>
					{sort.name} {sort.how}
				</span>
			</div>
			{open && (
				<div className="sort__popup">
					<ul>
						{list.map((item, i) => (
							<li
								onClick={() => onClickSelect(item)}
								className={sort.sortProperty === item.sortProperty && sort.how === item.how ? "active " : ""}
								key={i}
							>
								{item.name} {item.how}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
