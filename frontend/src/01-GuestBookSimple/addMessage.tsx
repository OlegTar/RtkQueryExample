import { useState } from "react";
import { useAppDispatch } from "./store";
import { AddAction } from "./slice";

export const AddMessage = () => {
	const [value, setValue] = useState("");
	const dispatch = useAppDispatch();

	const sendMessage = () => {
		const action: AddAction = {
			type: "add",
			payload: {
				message: value,
			},
		};
		dispatch(action);
		setValue("");
	};

	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button onClick={sendMessage}>Отправить</button>
		</div>
	);
};
