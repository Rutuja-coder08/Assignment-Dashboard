// Widget.js
import React from "react";
import "./Widget.css";

const Widget = ({ widget, removeWidget, categoryId }) => {
  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.content}</p>
      <span
        className="remove-widget"
        onClick={() => removeWidget(categoryId, widget.id)}
      >
        &times;
      </span>
    </div>
  );
};

export default Widget;
