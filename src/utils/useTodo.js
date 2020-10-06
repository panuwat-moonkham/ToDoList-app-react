import { useState, useEffect } from "react";

function useTodo() {
  const [todos, setTodos] = useState([]);
  const handleAddToDo = (todoInput) => {
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);
  };

  const handleToDoClick = (itemId) => {
    const cloneTodos = [...todos]; //colne with reference changed!
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) cloneTodos[itemIndex].type = "todo";
    setTodos(cloneTodos);
  };

  const handleDoClick = (itemId) => {
    const cloneTodos = [...todos]; //colne with reference changed!
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) cloneTodos[itemIndex].type = "doing";
    setTodos(cloneTodos);
  };

  const handleDoneClick = (itemId) => {
    const cloneTodos = [...todos]; //colne with reference changed!
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) cloneTodos[itemIndex].type = "done";
    setTodos(cloneTodos);
  };

  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem("todos")));
  }, [setTodos]);

  useEffect(() => {
    if (todos.length)
      window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [setTodos, todos]);

  return [
    todos,
    { handleAddToDo, handleToDoClick, handleDoClick, handleDoneClick }
  ];
}
export default useTodo;
