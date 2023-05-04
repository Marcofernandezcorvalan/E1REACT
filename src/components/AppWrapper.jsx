import React from "react";
import { AppWrapperStyled } from "./AppWrapperStyled";
import Titulo from "./Titulo";
import ToDoList from "./ToDoList";

const AppWrapper = () => {
	return (
		<AppWrapperStyled>
			<Titulo></Titulo>
			<ToDoList></ToDoList>
		</AppWrapperStyled>
	);
};

export default AppWrapper;
