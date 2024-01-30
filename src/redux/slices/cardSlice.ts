import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CardItemType = {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
	size: number;
	type: string;
	count: number;
};
interface CardSliceState {
	totalPrice: number;
	items: CardItemType[];
}
const initialState: CardSliceState = {
	totalPrice: 0,
	items: [],
};

export const cardSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CardItemType>) {
			const findItems = state.items.find((obj) => obj.id === action.payload.id);

			if (findItems) {
				findItems.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = state.items.reduce((prev, obj) => prev + obj.price * obj.count, 0);
		},

		minusItem(state, action: PayloadAction<string>) {
			const findItems = state.items.find((obj) => obj.id === action.payload);
			if (findItems) {
				findItems.count--;
			}
			state.totalPrice = state.items.reduce((prev, obj) => prev + obj.price * obj.count, 0);
		},
		removeItem(state, action: PayloadAction<string>) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
			state.totalPrice = state.items.reduce((prev, obj) => prev + obj.price * obj.count, 0);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});
export const selectCard = (state: RootState) => state.card;
// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cardSlice.actions;

export default cardSlice.reducer;
