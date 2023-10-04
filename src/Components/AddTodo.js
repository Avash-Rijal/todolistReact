import { useRef } from "react";
import NavBar from "./NavBar";
import AuthCheck from "../MiddleWare/AuthCheck";

const AddTodo = () => {
  const inputValue = useRef();
  const addTodo = (e) => {
    e.preventDefault();

    let todoItem = inputValue.current.value;

    let existingTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    existingTodo.push(todoItem);

    localStorage.setItem("todo", JSON.stringify(existingTodo));

    inputValue.current.value = "";
  };
  AuthCheck();
  return (
    <>
      <NavBar></NavBar>
      <div className="todo_container">
        <h1>Add to-do</h1>
        <form onSubmit={addTodo}>
          <input type="text" ref={inputValue} />
          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
