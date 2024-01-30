import React from "react";

type ItemCategoryProps = {
	activeIndex: number;
	onClickCategory: (index: number) => void;
	index: number;
	item: string;
};
const ItemCategory: React.FC<ItemCategoryProps> = (props) => {
	return (
		<li
			onClick={() => props.onClickCategory(props.index)}
			className={props.activeIndex === props.index ? "active" : ""}
		>
			{props.item}
		</li>
	);
};
export default ItemCategory;
