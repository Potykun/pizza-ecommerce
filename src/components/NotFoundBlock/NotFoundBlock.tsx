import React from "react";
import styles from "./NotFoundBlock.module.scss";
import { Link } from "react-router-dom";

const NotFoundBlock: React.FC = () => {
	return (
		<div className={styles.root}>
			<h1>Sorry, Page is not found. </h1>
			<div className="cart__bottom-buttons">
				<Link
					className="button button--outline go-back-btn"
					to="/pizza-ecommerce/"
				>
					<svg
						width="8"
						height="14"
						viewBox="0 0 8 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 13L1 6.93015L6.86175 1"
							stroke="#D3D3D3"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>

					<span>Go back</span>
				</Link>
			</div>
		</div>
	);
};
export default NotFoundBlock;
