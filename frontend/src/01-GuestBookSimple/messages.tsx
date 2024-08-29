import { RemoveAction } from "./slice";
import { useAppDispatch, useAppSelector } from "./store";

export const Messages = () => {
	const dispatch = useAppDispatch();
	const mesState = useAppSelector((state) => state.mesState);
	const messages = mesState.messages;

	const remove = (id: number) => {
		const removeAction: RemoveAction = {
			type: "remove",
			payload: {
				id: id,
			},
		};
		dispatch(removeAction);
	};

	return (
		<ul>
			{messages.map((m) => (
				<li key={m.id}>
					{`${m.id}  ${m.message}`}{" "}
					<a href="#" onClick={() => remove(m.id)}>
						Удалить
					</a>
				</li>
			))}
		</ul>
	);
};
