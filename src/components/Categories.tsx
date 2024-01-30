import React from "react";
import ItemCategory from "./ItemCategory";

type CategoriesProps = {
	categoryId: number;
	setCategoryId: any;
};

const Categories: React.FC<CategoriesProps> = ({ categoryId, setCategoryId }) => {
	const categories = ["all", "meat", "vegan", "greal", "spicy", "closed"];
	return (
		<div className="categories">
			<ul className="categories__list">
				{categories.map((item, index: number) => {
					return (
						<ItemCategory
							key={index}
							activeIndex={categoryId}
							onClickCategory={(index: number) => setCategoryId(index)}
							index={index}
							item={item}
						></ItemCategory>
					);
				})}
			</ul>
		</div>
	);
};
export default Categories;
