import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store";
import loader from "../../img/Loading_2.gif";
import { loadAllMessagesAsyncThunk, removeMessagesAsyncThunk } from "../thunks";

export const Messages = () => {
	const dispatch = useAppDispatch();
	const mesState = useAppSelector((state) => state.mesState);
	const { loading, messages, loadError, information } = mesState;

	useEffect(() => {
		console.log("load");
		dispatch(loadAllMessagesAsyncThunk());
	}, []);

	const remove = (id: number) => {
		dispatch(removeMessagesAsyncThunk(id));
	};

	return (
		<>
			{loading && <img src={loader} width={40} />}
			{loadError && <span>{loadError}</span>}
			{information && <span>{information}</span>}
			{!loading && (
				<ul>
					{messages.map((m) => (
						<li key={m.id}>
							{`${m.id}  ${m.message}`}{" "}
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									remove(m.id);
								}}
							>
								Удалить
							</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
};
