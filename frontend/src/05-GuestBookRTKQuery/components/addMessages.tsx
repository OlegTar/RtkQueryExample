import { useState } from "react";

import loader from "../../img/Loading_2.gif";
import { useAddMessageMutation, useGetMessagesQuery } from "../api";

export const AddMessage = () => {
	const [value, setValue] = useState("");
	const [sendRequest, status] = useAddMessageMutation();
	const { refetch } = useGetMessagesQuery();

	const { isLoading: addLoading, isError, data, isSuccess, reset } = status;
	console.log({ status });

	if (isSuccess) {
		refetch();
		reset();
	}

	const sendMessage = () => {
		sendRequest(value);
		setValue("");
	};

	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button disabled={addLoading} onClick={sendMessage}>
				Отправить
			</button>
			{addLoading && <img src={loader} width={20} />}
			{isError && <span>Произошла ошибка при добавлении</span>}
			{data && <span>Ответ сервера: {data}</span>}
		</div>
	);
};
