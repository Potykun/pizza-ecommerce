import React from "react";
import ReactPaginate from "react-paginate";
import Styels from "./Paginnation.module.scss";
export default function Paginnation({ setCurPage }) {
	return (
		<ReactPaginate
			className={Styels.root}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(e) => setCurPage(e.selected + 1)}
			pageRangeDisplayed={5}
			pageCount={3}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	);
}
