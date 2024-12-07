import React, { useState } from "react";
import "../ui/Service.css"; // CSS file for styling (optional)
import AppView from "../layout/AppView";
import WebView from "../layout/WebView";

const Services = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("app_view");

  // Handle tab click
  const handleTabClick = (view) => {
    setActiveTab(view);
  };

  return (
    <div className="tabs-container">
      <div className="service_hero_banner">
        <h1>OUR WORK</h1>
      </div>
      {/* Tab Buttons */}
      <div className="tabs-header">
        <button
          className={activeTab === "app_view" ? "active" : ""}
          onClick={() => handleTabClick("app_view")}
        >
          <div className="app_view_icon">
            <img src="services/app_view.png" width="35px" />
            App
          </div>
        </button>
        <button
          className={activeTab === "web_view" ? "active" : ""}
          onClick={() => handleTabClick("web_view")}
        >
          <div className="app_view_icon">
            <img src="services/web_view.png" width="35px" />
            Web
          </div>
        </button>
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {activeTab === "app_view" && (
          <div className="tab-content">
            <AppView />
          </div>
        )}
        {activeTab === "web_view" && (
          <div className="tab-content">
            <WebView />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
