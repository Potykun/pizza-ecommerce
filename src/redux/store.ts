import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import card from "./slices/cardSlice";
import pizza from "./slices/pizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		filter,
		card,
		pizza,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
