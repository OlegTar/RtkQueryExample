export type BaseAction = {
	type: string;
};

export interface AddAction extends BaseAction {
	type: "add";
	payload: string;
}

export interface AddLoaderAction extends BaseAction {
	type: "add_loading";
}

export interface AddErrorAction extends BaseAction {
	type: "add_error";
	payload: string;
}

export interface AddSuccessAction extends BaseAction {
	type: "add_success";
}

export interface LoadAllMessagesAction extends BaseAction {
	type: "load";
}

export interface LoadAllMessagesSuccessAction extends BaseAction {
	type: "load_success";
	payload: {
		message: string;
		id: number;
	}[];
}

export interface LoadLoaderAction extends BaseAction {
	type: "load_loading";
}

export interface LoadErrorAction extends BaseAction {
	type: "load_error";
	payload: string;
}

export interface RemoveAction extends BaseAction {
	type: "remove";
	payload: number;
}

export interface RemoveLoaderAction extends BaseAction {
	type: "remove_loading";
}

export interface RemoveErrorAction extends BaseAction {
	type: "remove_error";
	payload: string;
}

export interface InformationAction extends BaseAction {
	type: "information";
	payload: string;
}

export type Action =
	| AddAction
	| AddErrorAction
	| AddLoaderAction
	| AddSuccessAction
	| LoadLoaderAction
	| LoadErrorAction
	| LoadAllMessagesAction
	| LoadAllMessagesSuccessAction
	| RemoveAction
	| RemoveLoaderAction
	| RemoveErrorAction
	| InformationAction;

export const addMessageSuccess: AddSuccessAction = {
	type: "add_success",
};

export const loadAllMessages: LoadAllMessagesAction = {
	type: "load",
};

export function loadAllMessagesSuccessCreator(
	response: { message: string; id: number }[]
): LoadAllMessagesSuccessAction {
	return {
		type: "load_success",
		payload: response,
	};
}

export function loaderCreator(
	type: "load_loading" | "add_loading" | "remove_loading"
): LoadLoaderAction | AddLoaderAction | RemoveLoaderAction {
	return {
		type,
	};
}

export function errorActionCreator(
	error: string,
	type: "load_error" | "add_error" | "remove_error"
): LoadErrorAction | AddErrorAction | RemoveErrorAction {
	return {
		type: type,
		payload: error,
	};
}

export function addActionCreator(text: string): AddAction {
	return {
		type: "add",
		payload: text,
	};
}

export function removeActionCreator(id: number): RemoveAction {
	return {
		type: "remove",
		payload: id,
	};
}

export function informationActionCreator(text: string): InformationAction {
	return {
		type: "information",
		payload: text,
	};
}
