import React from "react";
import ItemCategory from "./ItemCategory";

type CategoriesProps = {
	categoryId: number;
	setCategoryId: (i: number) => void;
};

const categories = ["all", "meat", "vegan", "greal", "spicy", "closed"];
const Categories: React.FC<CategoriesProps> = ({ categoryId, setCategoryId }) => {
	return (
		<div className="categories">
			<ul className="categories__list">
				{categories.map((item, index: number) => {
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
};
export default Categories;
