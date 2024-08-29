import { createAsyncThunk, GetThunkAPI } from "@reduxjs/toolkit";
import { information } from "./slice";

const url = "https://localhost:7138/api/Messages";

export const loadAllMessagesAsyncThunk = createAsyncThunk(
	"loadAllMessages",
	async () => {
		const data = await fetch(url);
		const messages = await data.json();
		return messages as { message: string; id: number }[];
	}
);

export const addMessagesAsyncThunk = createAsyncThunk<void, string>(
	"addMessage",
	async (message, thunkApi) => {
		const result = await fetch(url, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(message),
		});
		if (!result.ok) {
			throw "error";
		}
		thunkApi.dispatch(loadAllMessagesAsyncThunk());
	}
);

export const removeMessagesAsyncThunk = createAsyncThunk<
	void,
	number,
	{ rejectValue: string }
>("removeMessage", async (id, thunkApi) => {
	const result = await fetch(`${url}?id=${encodeURIComponent(id)}`, {
		method: "DELETE",
	});
	if (!result.ok) {
		throw "произошла ошибка";
	}
	thunkApi.dispatch(information("Удаление произошло успешно"));
	thunkApi.dispatch(loadAllMessagesAsyncThunk());
	setTimeout(() => thunkApi.dispatch(information("")), 2000);
});
