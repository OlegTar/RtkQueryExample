import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { addActionCreator } from "../actions";
import loader from "../../img/Loading_2.gif";

export const AddMessage = () => {
	const [value, setValue] = useState("");
	const dispatch = useAppDispatch();
	const { addLoading, addError } = useAppSelector((state) => state.mesState);

	const sendMessage = () => {
		dispatch(addActionCreator(value));
		setValue("");
	};

	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button disabled={addLoading} onClick={sendMessage}>
				Отправить
			</button>
			{addLoading && <img src={loader} width={20} />}
			{addError && <span>{addError}</span>}
		</div>
	);
};
