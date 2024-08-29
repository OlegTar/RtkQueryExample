import { Action } from "./actions";
import { initState, State } from "./state";

export function mesStateReducer(state = initState, action: Action): State {
	switch (action.type) {
		case "load_loading":
			return {
				...state,
				loading: true,
			};
		case "add_loading":
			return {
				...state,
				addLoading: true,
			};
		case "load_error": {
			return {
				...state,
				loading: false,
				loadError: action.payload,
			};
		}
		case "load_success":
			return {
				...state,
				messages: action.payload,
				loading: false,
				loadError: "",
			};
		case "add_error":
			return {
				...state,
				addError: action.payload,
				addLoading: false,
			};
		case "add_success":
			return {
				...state,
				addError: "",
				addLoading: false,
			};
		case "remove_loading":
			return {
				...state,
				loading: true,
			};
		case "remove_error":
			return {
				...state,
				loading: false,
				loadError: action.payload,
			};
		case "information": {
			return {
				...state,
				information: action.payload,
			};
		}
		default:
			return state;
	}
}
