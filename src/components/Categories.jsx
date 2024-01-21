import React, { useState } from "react";
import ItemCategory from "./ItemCategory";

export function Categories() {
	const [activeIndex, setActicveInxdex] = useState(1);
	const onClickCategory = (index) => {
		setActicveInxdex(index);
	};
	const categories = ["all", "meat", "vegan", "greal", "spicy", "closed"];
	return (
		<div className="categories">
			<ul>
				{categories.map((item, index) => {
					return (
						<ItemCategory
							key={index}
							activeIndex={activeIndex}
							onClickCategory={onClickCategory}
							index={index}
							item={item}
						></ItemCategory>
					);
				})}
			</ul>
		</div>
	);
}
