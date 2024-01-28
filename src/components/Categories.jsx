import React from "react";
import ItemCategory from "./ItemCategory";

export function Categories({ categoryId, setCategoryId }) {
	const categories = ["all", "meat", "vegan", "greal", "spicy", "closed"];
	return (
		<div className="categories">
			<ul className="categories__list">
				{categories.map((item, index) => {
					return (
						<ItemCategory
							key={index}
							activeIndex={categoryId}
							onClickCategory={(index) => setCategoryId(index)}
							index={index}
							item={item}
						></ItemCategory>
					);
				})}
			</ul>
		</div>
	);
}
