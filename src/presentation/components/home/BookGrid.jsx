
import React, { useState } from "react";
import { productsData, sectionTabs, childrenBooks, travelBooks } from '../../../data/data.js';
import BookSection from "./BookSection";

const BookGrid = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Tabs */}
      <div className="books-section">
        <div className="section-tabs">
          {sectionTabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`tab-item ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </div>
          ))}
        </div>
      </div>

      <BookSection books={productsData} />
      <BookSection title="Children Book Set" books={childrenBooks} />
      <BookSection title="Travel Book Set" books={travelBooks}/>
          </>
  );
};

export default BookGrid;
