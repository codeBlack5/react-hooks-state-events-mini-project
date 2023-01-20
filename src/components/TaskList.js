import React from "react";
import Task from "./Task";

function TaskList({ tasks,removeTask }) { 

  const listOfTask = tasks.map(({ text, category }, index) => {
    return (
      <Task
        key={`${index}-${text}`}
        id={`${index}-${text}`}
        category={category}
        text={text}
        clicked={removeTask}
      />
    );
  });
  return <div className="tasks">{listOfTask}</div>;

}

export default TaskList;
