import React from "react";
import Input from "./components/Input";
import Lane from "./components/Lane";
import Title from "./components/Title";
import { useTodo } from "./contexts/ActionContext";
import "./main.css";

function App() {
  const [, { handleAddTodo }] = useTodo();

  return (
    <div className="container">
      <Title>Simple Kanban board</Title>
      <Input onSubmit={handleAddTodo} />
      <Lane />
    </div>
  );
}

export default App;
