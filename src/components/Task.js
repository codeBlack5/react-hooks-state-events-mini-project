import React from "react";

function Task({text, category, clicked, id}) {
  // function handleClick(){
  //   onDeleteTask(id);
  // }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={(e)=> clicked(id)} className="delete">X</button>
    </div>
  );
}

export default Task;
