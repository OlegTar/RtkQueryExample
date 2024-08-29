import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import { initState } from "./state";
import {
	addMessagesAsyncThunk,
	loadAllMessagesAsyncThunk,
	removeMessagesAsyncThunk,
} from "./thunks";

export const mesState = createSlice({
	name: "mesState",
	initialState: initState,
	reducers: {
		information: (state, action: PayloadAction<string>) => {
			state.information = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			// .addCase(loadAllMessagesAsyncThunk.pending, (state) => {
			// 	state.loading = true;
			// })
			.addCase(loadAllMessagesAsyncThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.messages = action.payload;
				state.loadError = "";
			})
			.addCase(loadAllMessagesAsyncThunk.rejected, (state) => {
				state.loadError = "Ошибка загрузки данных";
				state.loading = false;
			})
			.addCase(addMessagesAsyncThunk.pending, (state) => {
				state.addLoading = true;
			})
			.addCase(addMessagesAsyncThunk.fulfilled, (state) => {
				state.addLoading = false;
			})
			.addCase(addMessagesAsyncThunk.rejected, (state) => {
				state.addError = "Ошибка добавления сообщения";
				state.addLoading = false;
			})
			.addCase(removeMessagesAsyncThunk.rejected, (state, action) => {
				state.loading = false;
				state.loadError = "Произошла ошибка удаления";
			})
			.addMatcher(
				isAnyOf(
					loadAllMessagesAsyncThunk.pending,
					removeMessagesAsyncThunk.pending
				),
				(state) => {
					state.loading = true;
				}
			);
	},
});

export const { actions, reducer, reducerPath } = mesState;
export const { information } = actions;
