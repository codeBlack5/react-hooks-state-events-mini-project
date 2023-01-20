import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
      text: "",
      category: "Code"
    });
  const listOfOptions = categories.map((cat) => {
    return cat !== "All" ? (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ) : null;
  });

  function submitHandler(event) {  
    event.preventDefault()     
    onTaskFormSubmit(formData)  
    setFormData({
        text:"",
        category: "Code",
      })  
  }

  function changeHandler(event) {
    const { target } = event;
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [target.id]:target.value
      }
    });
  }
  return (
    <form onSubmit={submitHandler} className="new-task-form">
      <label>
        Details
        <input type="text" id="text" name="text" value={formData.text} onChange={changeHandler} />
      </label>
      <label>
        Category
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={changeHandler}
        >
          {listOfOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
