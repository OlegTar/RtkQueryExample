import { Provider } from "react-redux";
import { store } from "../store";
import { Messages } from "./messages";
import { AddMessage } from "./addMessages";

export const ProviderRTKQueryPesimisticOptimistic = () => {
	return (
		<Provider store={store}>
			<AddMessage />
			<Messages />
		</Provider>
	);
};
