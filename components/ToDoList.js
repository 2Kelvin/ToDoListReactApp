import React from "react";
// importing components
import Todo from "./Todo";  

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* mapping out each to do item to be displayed in the to-do-list as entered from the input */}
                {/* we're using the <Todo/> component to display each to-do item*/}
                {filteredTodos.map((todo) => (
                    <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;