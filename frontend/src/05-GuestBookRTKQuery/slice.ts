import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const mesState = createSlice({
	name: "mesState",
	reducerPath: "mesStateInformation",
	initialState: {
		information: "",
	},
	reducers: {
		information: (state, action: PayloadAction<string>) => {
			state.information = action.payload;
		},
	},
});

export const { information } = mesState.actions;
