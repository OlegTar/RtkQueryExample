import { Middleware, MiddlewareAPI } from "redux";
import {
	Action,
	addMessageSuccess,
	errorActionCreator,
	informationActionCreator,
	loadAllMessages,
	loadAllMessagesSuccessCreator,
	loaderCreator,
} from "./actions";
import { AppDispatch, AppState } from "./store";

const url = "https://localhost:7138/api/Messages";

export const RequestMiddleware: Middleware =
	(store: MiddlewareAPI<AppDispatch, AppState>) =>
	(next) =>
	async (action_) => {
		let action = action_ as Action;
		const result = next(action);
		if (action.type === "load") {
			store.dispatch(loaderCreator("load_loading"));
			try {
				const data = await fetch(url);
				const messages = await data.json();
				store.dispatch(loadAllMessagesSuccessCreator(messages));
			} catch (e) {
				store.dispatch(
					errorActionCreator("Произошла ошибка загрузки данных", "load_error")
				);
			}
		} else if (action.type == "add") {
			try {
				store.dispatch(loaderCreator("add_loading"));
				const result = await fetch(url, {
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
					body: JSON.stringify(action.payload),
				});
				if (!result.ok) {
					throw "error";
				}
				store.dispatch(addMessageSuccess);
				store.dispatch(loadAllMessages);
			} catch (e) {
				store.dispatch(
					errorActionCreator(
						"Произошла ошибка добавления сообщения",
						"add_error"
					)
				);
			}
		} else if (action.type == "remove") {
			try {
				store.dispatch(loaderCreator("remove_loading"));
				const result = await fetch(
					`${url}?id=${encodeURIComponent(action.payload)}`,
					{
						method: "DELETE",
					}
				);
				if (!result.ok) {
					throw "error";
				}
				store.dispatch(informationActionCreator("Удаление произошло успешно"));
				setTimeout(() => store.dispatch(informationActionCreator("")), 2000);
				store.dispatch(loadAllMessages);
			} catch (e) {
				store.dispatch(
					errorActionCreator("Произошла ошибка удаления", "remove_error")
				);
			}
		}
		return result;
	};
