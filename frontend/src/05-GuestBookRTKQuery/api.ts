import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://localhost:7138/api/Messages";

export const messagesApi = createApi({
	reducerPath: "mesState",
	keepUnusedDataFor: 3,
	baseQuery: fetchBaseQuery({ baseUrl: url }),
	endpoints: (builder) => ({
		getMessages: builder.query<{ message: string; id: number }[], void>({
			query: () => "",
		}),
		addMessage: builder.mutation<number, string>({
			query: (req: string) => ({
				method: "POST",
				url: "",
				body: JSON.stringify(req),
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
		removeMessage: builder.mutation<void, number>({
			query: (req: number) => ({
				method: "DELETE",
				url: `?id=${encodeURIComponent(req)}`,
			}),
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
