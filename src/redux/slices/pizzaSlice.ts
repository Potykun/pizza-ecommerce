import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
type FetchPizzaArg = {
	search: string;
	currentPage: string;
	categoryId: string;
	sort: {
		how: string;
		sortProperty: string;
	};
};

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async (params: FetchPizzaArg) => {
	const { search, currentPage, categoryId, sort } = params;
	const { data } = await axios.get<PizzaType[]>(
		`https:65aeab521dfbae409a75506c.mockapi.io/items?page=${currentPage}&limit=4&${
			+categoryId > 0 ? `category=${categoryId}` : ""
		}${search}&sortBy=${sort.sortProperty}&order=${sort.how}`
	);
	return data as PizzaType[];
});

type PizzaType = {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
	rating: number;
};

interface PizzaSliceType {
	items: PizzaType[];
	status: "loading" | "success" | "error";
}

const initialState: PizzaSliceType = {
	items: [],
	status: "loading",
};
export const pizzaSlice = createSlice({
	name: "pizza",
	initialState,
	reducers: {
		setItem(state, action: PayloadAction<PizzaType[]>) {
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

export const selectPizzaItems = (state: RootState) => state.pizza.items;
export const selectPizzaStatus = (state: RootState) => state.pizza;
export const selectCartItemById = (id: string) => (state: RootState) => state.card.items.find((obj) => obj.id === id);
// Action creators are generated for each case reducer function
export const { setItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
