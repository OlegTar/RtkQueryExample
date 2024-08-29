import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store";
import loader from "../../img/Loading_2.gif";
import { useGetMessagesQuery, useRemoveMessageMutation } from "../api";
import { information as informationAction } from "../slice";

export const Messages = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.mesStateInformation);
	const { information } = state;
	const {
		isLoading: loading,
		//isFetching: loading,
		data: messages,
		error: loadError,
	} = useGetMessagesQuery(undefined as void, {
		//pollingInterval: 3000
	});

	const [
		removeMesage,
		{
			isLoading: removeLoading,
			isError: removeError,
			isSuccess: removeSuccess,
			reset,
		},
	] = useRemoveMessageMutation();

	const remove = (id: number) => {
		removeMesage(id);
	};

	console.log(removeSuccess);

	if (removeSuccess) {
		dispatch(informationAction("Удаление произошло успешно"));
		setTimeout(() => {
			dispatch(informationAction(""));
			reset();
		}, 2000);
	}

	return (
		<>
			{(loading || removeLoading) && <img src={loader} width={40} />}
			{information && <span>{information}</span>}
			{removeError && <span>Произошла ошибка при удалении</span>}
			{loadError && <span>Произошла ошибка загрузки данных</span>}
			{!loading && messages && (
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
