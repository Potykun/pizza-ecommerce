import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
	name: "card",
	initialState: {
		totalPrice: 0,
		items: [],
	},
	reducers: {
		addProduct(state, action) {
			state.items.push(action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
