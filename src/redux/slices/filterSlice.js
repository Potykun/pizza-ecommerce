import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
	name: "filters",
	initialState: {
		categoryId: 0,
		currentPage: 1,
		sort: {
			name: "популярности",
			sortProperty: "rating",
			how: "desk",
		},
	},
	reducers: {
		//  filterSlice.actions
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
