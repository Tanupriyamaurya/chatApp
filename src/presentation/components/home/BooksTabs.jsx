import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import CategoryBooks from "./CategoryBooks"; 
import { booksTabsData } from "../../../data/data";

const BooksTabs = () => {
  const tabLabels = Object.keys(booksTabsData);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ mt: 4 }}>
      <Tabs
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
        centered
      >
        {tabLabels.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      <Box sx={{ mt: 2 }}>
        <CategoryBooks
          title={tabLabels[activeTab]}
          books={booksTabsData[tabLabels[activeTab]]}
        />
      </Box>
    </Box>
  );
};

export default BooksTabs;
