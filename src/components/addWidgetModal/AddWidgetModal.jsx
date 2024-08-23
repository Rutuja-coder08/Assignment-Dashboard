// AddWidgetModal.js
import React from "react";
import "./AddWidgetModal.css";

const AddWidgetModal = ({
  categories,
  activeTab,
  setActiveTab,
  activeCategoryWidgets,
  handleWidgetCheckChange,
  newWidgetName,
  setNewWidgetName,
  newWidgetContent,
  setNewWidgetContent,
  addWidget,
  closeModal,
}) => {
  return (
    <>
      <div className="modal-overlay" onClick={closeModal} />
      <div className="add-widget-modal">
        <nav className="navbar-model">
          <h4>Manage Widget</h4>
          <button className="close-modal" onClick={closeModal}>
            &times;
          </button>
        </nav>
        <div className="manage-model">
          <p>Personalize your dashboard by adding the following widget</p>
          <div className="tab-container">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tab-button ${
                  category.id === activeTab ? "active" : ""
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="widget-list">
            {activeCategoryWidgets.map((widget) => {
              const isChecked = activeCategoryWidgets.some(
                (w) => w.id === widget.id
              );
              return (
                <div key={widget.id} className="widget-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) =>
                      handleWidgetCheckChange(
                        activeTab,
                        widget.id,
                        e.target.checked
                      )
                    }
                  />
                  <label>{widget.name}</label>
                </div>
              );
            })}
          </div>
          <div className="navbar-model-h4">
            <h4>Add New Widget</h4>
          </div>
          <div className="add-widget">
            <label htmlFor="">Widget Name:</label>
            <input
              className="widget-name-input"
              type="text"
              placeholder="Name...."
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
            />
            <label htmlFor="">Widget Content:</label>
            <textarea
              className="widget-name-input"
              placeholder="Content...."
              value={newWidgetContent}
              onChange={(e) => setNewWidgetContent(e.target.value)}
            />
          </div>
          <div className="navbar-model-save-btn">
            <button className="global-add-widget-btn" onClick={addWidget}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWidgetModal;
