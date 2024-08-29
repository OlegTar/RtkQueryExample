import { remove } from "./slice";
import { useAppDispatch, useAppSelector } from "./store";

export const Messages = () => {
	const state = useAppSelector((state) => state.mesState);
	const dispatch = useAppDispatch();
	const messages = state.messages;

	const removeMessage = (id: number) => {
		dispatch(remove(id));
	};

	return (
		<ul>
			{messages.map((m) => (
				<li key={m.id}>
					{`${m.id}  ${m.message}`}{" "}
					<a href="#" onClick={() => removeMessage(m.id)}>
						Удалить
					</a>
				</li>
			))}
		</ul>
	);
};
