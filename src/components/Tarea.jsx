import React from "react";
export const Tarea = (props) => {
	const { tarea } = props;

	return (
		<>
			<div id={tarea.id}>
				<span>{tarea.tarea}</span>
			</div>
		</>
	);
};
