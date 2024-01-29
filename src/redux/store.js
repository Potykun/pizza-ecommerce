import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import card from "./slices/cardSlice";

export default configureStore({
	reducer: {
		filter,
		card,
	},
});
