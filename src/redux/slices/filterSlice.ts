import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SortType = {
	name: string;
	sortProperty: "rating" | "title" | "price";
	how: "desc" | "asc";
};

interface FilterSliceType {
	searchValue: string;
	categoryId: number;
	currentPage: number;
	sort: SortType;
}
const initialState: FilterSliceType = {
	searchValue: "",
	categoryId: 0,
	currentPage: 1,
	sort: {
		name: "популярности",
		sortProperty: "rating",
		how: "desc",
	},
};

export const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		//  filterSlice.actions
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
		setSort(state, action: PayloadAction<SortType>) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setFilters(state, action: PayloadAction<FilterSliceType>) {
			state.sort = action.payload.sort;
			state.currentPage = +action.payload.currentPage;
			state.categoryId = +action.payload.categoryId;
		},
	},
});
export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
