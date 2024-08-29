import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addMessage } from "../02-GuestBookReduxToolkit/slice";

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
			query: (text: string) => ({
				method: "POST",
				url: "",
				body: JSON.stringify(text),
				headers: {
					"Content-Type": "application/json",
				},
			}),
			async onQueryStarted(text, { dispatch, queryFulfilled }) {
				try {
					const { data: id } = await queryFulfilled;
					dispatch(
						messagesApi.util.updateQueryData(
							"getMessages",
							undefined as void,
							(state) => {
								state.push({
									message: text,
									id: id,
								});
								return state;
							}
						)
					);
				} catch {}
			},
		}),
		removeMessage: builder.mutation<void, number>({
			query: (req: number) => ({
				method: "DELETE",
				url: `?id=${encodeURIComponent(req)}`,
			}),
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					messagesApi.util.updateQueryData(
						"getMessages",
						undefined as void,
						(state) => {
							return state.filter((m) => m.id !== id);
						}
					)
				);

				try {
					await queryFulfilled;
				} catch {
					patchResult.undo();
				}
			},
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
