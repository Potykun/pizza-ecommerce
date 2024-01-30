import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import card from "./slices/cardSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
	reducer: {
		filter,
		card,
		pizza,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
