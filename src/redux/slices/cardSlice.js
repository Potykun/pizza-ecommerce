import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
	name: "card",
	initialState: {
		totalPrice: 0,
		items: [],
	},
	reducers: {
		// addItem(state, action) {
		// 	state.items.push(action.payload);
		// 	state.totalPrice = state.items.reduce(
		// 		(prev, obj) => prev + obj.price,
		// 		0
		// 	);
		// },
		addItem(state, action) {
			const findItems = state.items.find((obj) => obj.id === action.payload.id);

			if (findItems) {
				findItems.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = state.items.reduce((prev, obj) => prev + obj.price * obj.count, 0);
		},

		minusItem(state, action) {
			const findItems = state.items.find((obj) => obj.id === action.payload);
			if (findItems) {
				findItems.count--;
			}
			state.totalPrice = state.items.reduce((prev, obj) => prev + obj.price * obj.count, 0);
		},
		removeItem(state, action) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
			state.totalPrice = state.items.reduce((prev, obj) => prev + obj.price * obj.count, 0);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cardSlice.actions;

export default cardSlice.reducer;
