import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={465}
		viewBox="0 0 280 465"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<circle
			cx="140"
			cy="125"
			r="125"
		/>
		<rect
			x="0"
			y="260"
			rx="10"
			ry="10"
			width="280"
			height="25"
		/>
		<rect
			x="0"
			y="300"
			rx="10"
			ry="10"
			width="280"
			height="90"
		/>
		<rect
			x="130"
			y="405"
			rx="25"
			ry="25"
			width="150"
			height="45"
		/>
		<rect
			x="0"
			y="410"
			rx="10"
			ry="10"
			width="95"
			height="35"
		/>
	</ContentLoader>
);

export default Skeleton;
