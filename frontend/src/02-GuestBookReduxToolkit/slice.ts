import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type State = {
	messages: { message: string; id: number }[];
};
export const initState: State = {
	messages: [],
};

const mesStateSlice = createSlice({
	name: "mesState",
	initialState: initState,
	reducers: {
		addMessage(state, action: PayloadAction<string>) {
			const ids = state.messages.map((i) => i.id).sort((a, b) => b - a);
			let newId = 1;
			if (ids.length > 0) {
				newId = ids[0] + 1;
			}

			state.messages.push({
				id: newId,
				message: action.payload,
			});
		},

		remove(state, action: PayloadAction<number>) {
			state.messages = state.messages.filter((m) => m.id != action.payload);
			// return {
			// 	...state,
			// 	messages: state.messages.filter((m) => m.id != action.payload),
			// };
		},
	},
});

export const { actions, reducer, reducerPath } = mesStateSlice;
export const { addMessage, remove } = actions;
