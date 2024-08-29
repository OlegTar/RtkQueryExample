import { useState } from "react";
import { useAppDispatch } from "./store";
import { addMessage } from "./slice";

export const AddMessage = () => {
	const [value, setValue] = useState("");
	const dispatch = useAppDispatch();

	const sendMessage = () => {
		dispatch(addMessage(value));
		setValue("");
	};

	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button onClick={sendMessage}>Отправить</button>
		</div>
	);
};
