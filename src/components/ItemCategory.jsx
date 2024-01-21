import React from "react";

export default function ItemCategory(props) {
	return (
		<li
			onClick={() => props.onClickCategory(props.index)}
			className={props.activeIndex === props.index ? "active" : ""}
		>
			{props.item}
		</li>
	);
}
