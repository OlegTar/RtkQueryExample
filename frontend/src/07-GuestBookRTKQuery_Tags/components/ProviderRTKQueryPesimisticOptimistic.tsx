import { Provider } from "react-redux";
import { store } from "../store";
import { Messages } from "./messages";
import { AddMessage } from "./addMessages";

export const ProviderRTKQueryTags = () => {
	return (
		<Provider store={store}>
			<AddMessage />
			<Messages />
		</Provider>
	);
};
