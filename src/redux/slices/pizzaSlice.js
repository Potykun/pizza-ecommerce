import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async (params) => {
	const { search, currentPage, categoryId, sort } = params;
	const { data } = await axios.get(
		`https:65aeab521dfbae409a75506c.mockapi.io/items?page=${currentPage}&limit=4&${
			categoryId > 0 ? `category=${categoryId}` : ""
		}${search}&sortBy=${sort.sortProperty}&order=${sort.how}`
	);
	return data;
});

export const pizzaSlice = createSlice({
	name: "pizza",
	initialState: {
		items: [],
		status: "loading",
	},
	reducers: {
		setItem(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzas.pending, (state) => {
				state.status = "loading";
				state.items = [];
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = "success";
			})
			.addCase(fetchPizzas.rejected, (state) => {
				state.status = "error";
				state.items = [];
			});
	},
});

// Action creators are generated for each case reducer function
export const { setItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
