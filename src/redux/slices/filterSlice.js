import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
	name: "filters",
	initialState: {
		categoryId: 0,
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
	},
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
