import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addMessage } from "../02-GuestBookReduxToolkit/slice";
import { error } from "console";

const url = "https://localhost:7138/api/Messages";

export const messagesApi = createApi({
	reducerPath: "mesState",
	keepUnusedDataFor: 3,
	baseQuery: fetchBaseQuery({ baseUrl: url }),
	tagTypes: ["Messages"],
	endpoints: (builder) => ({
		getMessages: builder.query<{ message: string; id: number }[], void>({
			query: () => "",
			providesTags: (result, error, arg) =>
				result
					? [...result.map(({ id }) => ({ type: "Messages" as const, id }))]
					: ["Messages"],
		}),
		addMessage: builder.mutation<number, string>({
			query: (text: string) => ({
				method: "POST",
				url: "",
				body: JSON.stringify(text),
				headers: {
					"Content-Type": "application/json",
				},
			}),
			invalidatesTags: ["Messages"],
		}),
		removeMessage: builder.mutation<void, number>({
			query: (req: number) => ({
				method: "DELETE",
				url: `?id=${encodeURIComponent(req)}`,
			}),
			invalidatesTags: (result, error, id) =>
				id % 2 == 0 ? [{ type: "Messages", id: id }] : [],
		}),
	}),
});

export const {
	reducer,
	reducerPath,
	middleware,
	useGetMessagesQuery,
	useAddMessageMutation,
	useRemoveMessageMutation,
} = messagesApi;
