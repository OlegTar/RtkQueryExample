import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	reducerPath as mesStatePath,
	reducer as mesStateReducer,
} from "./slice";
import { useDispatch, useSelector } from "react-redux";

export const rootReducer = combineReducers({
	[mesStatePath]: mesStateReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
