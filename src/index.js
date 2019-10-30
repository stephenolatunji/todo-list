import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import TodoList from "./TodoList";

let project = document.querySelector('#root');

ReactDom.render(
    <div>
        <TodoList />
    </div>,
    project
);