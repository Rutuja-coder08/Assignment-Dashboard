import React, { useState } from "react";
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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSaveChanges = () => {
    if (!newWidgetName || !newWidgetContent) {
      setErrorMessage("Widget name and content cannot be empty.");
    } else {
      setErrorMessage("");
      addWidget();
    }
  };

  const handleCancel = () => {
    setNewWidgetName("");
    setNewWidgetContent("");
    setErrorMessage("");
    closeModal();
  };

  return (
    <>
      <div className="modal-overlay" onClick={closeModal} />
      <div className="add-widget-modal">
        <nav className="navbar-model">
          <h4>Manage Widget</h4>
          <button className="close-modal" onClick={handleCancel}>
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
            <label htmlFor="widget-name">Widget Name:</label>
            <input
              id="widget-name"
              className="widget-name-input"
              type="text"
              placeholder="Name...."
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
            />
            <label htmlFor="widget-content">Widget Content:</label>
            <textarea
              id="widget-content"
              className="widget-name-input"
              placeholder="Content...."
              value={newWidgetContent}
              onChange={(e) => setNewWidgetContent(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="navbar-model-btn-div">
            <div className="navbar-model-btn">
              <button className="global-add-widget-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div className="navbar-model-btn">
              <button
                className="global-add-widget-btn"
                onClick={handleSaveChanges}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWidgetModal;
