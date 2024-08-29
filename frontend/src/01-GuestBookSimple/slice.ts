export type State = {
	messages: { message: string; id: number }[];
};

export type BaseAction = {
	type: string;
};

export interface AddAction extends BaseAction {
	type: "add";
	payload: { message: string };
}

export interface RemoveAction extends BaseAction {
	type: "remove";
	payload: { id: number };
}

export type Action = AddAction | RemoveAction;

export const initState: State = {
	messages: [],
};

export function mesStateReducer(state = initState, action: Action): State {
	switch (action.type) {
		case "add":
			const ids = state.messages.map((i) => i.id).sort((a, b) => b - a);
			let newId = 1;
			if (ids.length > 0) {
				newId = ids[0] + 1;
			}
			return {
				...state,
				messages: [
					...state.messages,
					{
						message: action.payload.message,
						id: newId,
					},
				],
			};
		case "remove":
			return {
				messages: state.messages.filter((ft) => ft.id != action.payload.id),
			};
		default:
			return state;
	}
}
