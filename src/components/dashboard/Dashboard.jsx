// Dashboard.js
import React, { useState } from "react";
import { dashboardData } from "../../data";
import Navbar from "../navbar/Navbar";
import DashboardHeader from "../dashboardHeader/DashboardHeader";
import Category from "../Category/Category";
import AddWidgetModal from "../addWidgetModal/AddWidgetModal";
import "./Dashboard.css";

const Dashboard = () => {
  const [categories, setCategories] = useState(dashboardData.categories);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [activeTab, setActiveTab] = useState(dashboardData.categories[0]?.id);
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetContent, setNewWidgetContent] = useState("");

  const addWidget = () => {
    if (newWidgetName.trim() === "" || newWidgetContent.trim() === "") return;

    const updatedCategories = categories.map((category) => {
      if (category.id === activeTab) {
        return {
          ...category,
          widgets: [
            ...category.widgets,
            { id: Date.now(), name: newWidgetName, content: newWidgetContent },
          ],
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    setNewWidgetName("");
    setNewWidgetContent("");
    setModalOpen(false);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  const openModalForCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setActiveTab(categoryId);
    setModalOpen(true);
  };

  const handleWidgetCheckChange = (categoryId, widgetId, isChecked) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        const isAlreadyInCategory = category.widgets.some(
          (widget) => widget.id === widgetId
        );
        if (isChecked && !isAlreadyInCategory) {
          const widgetToAdd = dashboardData.allWidgets.find(
            (widget) => widget.id === widgetId
          );
          return {
            ...category,
            widgets: [...category.widgets, widgetToAdd],
          };
        } else if (!isChecked && isAlreadyInCategory) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.id !== widgetId
            ),
          };
        }
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const activeCategoryWidgets =
    categories.find((category) => category.id === activeTab)?.widgets || [];

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DashboardHeader setModalOpen={setModalOpen} />
      <div className="dashboard">
        {filteredCategories.map((category) => (
          <Category
            key={category.id}
            category={category}
            openModalForCategory={openModalForCategory}
            removeWidget={removeWidget}
          />
        ))}
      </div>
      {isModalOpen && (
        <AddWidgetModal
          categories={categories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeCategoryWidgets={activeCategoryWidgets}
          handleWidgetCheckChange={handleWidgetCheckChange}
          newWidgetName={newWidgetName}
          setNewWidgetName={setNewWidgetName}
          newWidgetContent={newWidgetContent}
          setNewWidgetContent={setNewWidgetContent}
          addWidget={addWidget}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
