import { useDispatch, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { mesStateReducer } from "./reducer";
import { RequestMiddleware } from "./middleware";

const rootReducer = combineReducers({
	mesState: mesStateReducer,
});

export const store = createStore(
	rootReducer,
	undefined,
	composeWithDevTools(applyMiddleware(RequestMiddleware))
);

export type AppStore = typeof store;
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
