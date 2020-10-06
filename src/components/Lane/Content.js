import React from "react";
import ListItem from "./ListItem";

function Content({ title, list }) {
  return (
    <div className="lane-content-container">
      <div className="todo-title">{title}</div>
      <ul className="list-container">
        {list.map((item) => (
          <ListItem key={item.id} id={item.id} type={item.type}>
            {item.content}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default Content;
