import React from "react";
import Widget from "../Widget/Widget";
import "./Category.css";

const Category = ({ category, openModalForCategory, removeWidget }) => {
  return (
    <div key={category.id} className="category">
      <h3>{category.name}</h3>
      <div className="widgets">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={removeWidget}
            categoryId={category.id}
          />
        ))}
        <div className="widget">
          <div className="center">
            <button
              className="add-widget-btn"
              onClick={() => openModalForCategory(category.id)}
            >
              <span>+</span> Add Widget
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
