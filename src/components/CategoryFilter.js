import React from "react";

function CategoryFilter({ categories,categorySelected,filterHandler }) {  

  const listOfButtons = categories.map((category, index) => {
    return (
      <button
        className={categorySelected === category ? "selected" : ""}
        key={`${category}-${index}`}
        onClick={(e) => filterHandler(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {listOfButtons}
    </div>
  );
}

export default CategoryFilter;
