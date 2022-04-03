import React,{useState, useEffect} from "react";
import "./App.css";
// importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  // useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // useEffect (run once when the app starts)
  useEffect(() => {
    getLocalTodos();
  }, []);
  // useEffect (main)
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);
  // function to filter my to-do list j[all, completed, uncompleted]
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
    
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // saving todos to local storage
  const saveLocalTodos = () => localStorage.setItem("todos", JSON.stringify(todos));
  // getting todos from local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let savedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(savedTodos);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
