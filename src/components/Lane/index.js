import React from "react";
import Content from "./Content";
import { useTodo } from "../../contexts/ActionContext";

function Lane() {
  const [{ todos, doings, dones }] = useTodo();

  return (
    <div className="lane-container">
      <Content title="Todo" list={todos} />
      <Content title="Doing" list={doings} />
      <Content title="Done" list={dones} />
    </div>
  );
}

export default Lane;
