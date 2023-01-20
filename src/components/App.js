import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [displayTasks, setDisplayTasks] = useState(TASKS);
  const [categorySelected, setCategory] = useState("All");

  function filterByCategory(cat) {
    setCategory(cat);    
  }

  function removeTask(id) {
    setDisplayTasks((currentTasks) => {
      return currentTasks.filter(({ text }, index) => {
        return `${index}-${text}` !== id;
      });
    });
  }
  function addNewTask(task) {
    console.log(task)
    setDisplayTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  }
  const taskToBeShown = displayTasks.filter(({category}) => {
    if(categorySelected === 'All'){
      return true;
    }else{
      return category === categorySelected
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categorySelected={categorySelected}
        filterHandler={filterByCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={addNewTask}       
      />
      <TaskList tasks={taskToBeShown} removeTask={removeTask} />
    </div>
  );
}

export default App;
