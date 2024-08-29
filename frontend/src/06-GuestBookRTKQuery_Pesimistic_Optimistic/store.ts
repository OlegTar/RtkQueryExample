import { useDispatch, useSelector } from "react-redux";
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer, reducerPath, middleware } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { mesState } from "./slice";

const rootReducer = combineReducers({
	[reducerPath]: reducer,
	[mesState.reducerPath]: mesState.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();

setupListeners(store.dispatch);
