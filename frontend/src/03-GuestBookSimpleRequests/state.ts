export type State = {
	messages: { message: string; id: number }[];
	loading: boolean;
	loadError: string;
	addLoading: boolean;
	addError: string;
	information: string;
};

export const initState: State = {
	messages: [],
	loading: false,
	loadError: "",
	addLoading: false,
	addError: "",
	information: "",
};
