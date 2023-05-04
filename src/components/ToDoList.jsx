import React, { useState } from "react";
import { ToDoListStyled } from "./ToDoListStyled";
import { ClickButtonStyled } from "./ClickButtonStyled";
import { Tarea } from "./Tarea";
import { InputStyled } from "./InputStyled";
const ToDoList = () => {
	const [tarea, setTarea] = useState("");
	const [listadoTareas, setListadoTareas] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (tarea === "") {
			alert("Tienes que poner una tarea");
			return;
		}

		const nuevaTarea = {
			id: Math.random(),
			tarea: tarea,
			completado: false,
		};

		const temp = [...listadoTareas, nuevaTarea];
		setListadoTareas(temp);
		setTarea("");
		console.log(listadoTareas);
	};

	const handleChange = (e) => {
		setTarea(e.target.value);
	};

	const eliminar = () => {
		setListadoTareas([]);
	};

	const desaparecido = () => {};

	return (
		<>
			<ToDoListStyled onSubmit={handleSubmit}>
				<InputStyled
					type="text"
					onChange={handleChange}
					value={tarea}
					placeholder="introduce la tarea"
				></InputStyled>
				<ClickButtonStyled onClick={handleSubmit}>AGREGAR</ClickButtonStyled>
			</ToDoListStyled>
			<ClickButtonStyled
				onClick={eliminar}
				style={{
					background: "darkred",
					width: "400px",
					height: "20px",
					padding: "0px",
					fontSize: "10px",
					// borderRadius: "0px",
				}}
			>
				Eliminar
			</ClickButtonStyled>
			<div>
				<h3>Por Hacer</h3>
				<div>
					{listadoTareas.map((tarea) => {
						return (
							<Tarea key={tarea.id} tarea={tarea}>
								{tarea.tarea}
							</Tarea>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ToDoList;
