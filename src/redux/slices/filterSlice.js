import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
	name: "filters",
	initialState: {
		searchValue: "",
		categoryId: 0,
		currentPage: 1,
		sort: {
			name: "популярности",
			sortProperty: "rating",
			how: "desc",
		},
	},
	reducers: {
		//  filterSlice.actions
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setFilters(state, action) {
			state.sort = action.payload.sort;
			state.currentPage = +action.payload.currentPage;
			state.categoryId = +action.payload.categoryId;
		},
	},
});
export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sort;
// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
