import { Provider } from "react-redux";
import { store } from "../store";
import { Messages } from "./messages";
import { AddMessage } from "./addMessage";

export const ProviderSimpleRequests = () => {
	return (
		<Provider store={store}>
			<AddMessage />
			<Messages />
		</Provider>
	);
};
