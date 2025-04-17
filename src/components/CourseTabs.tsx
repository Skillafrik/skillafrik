
import React, { useState } from 'react';

interface CourseTabsProps {
  tabs: string[];
  defaultTab: string;
  onTabChange?: (tab: string) => void;
}

const CourseTabs: React.FC<CourseTabsProps> = ({ tabs, defaultTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 border-b overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors
            ${activeTab === tab
              ? "border-b-2 border-orange-500 text-orange-600"
              : "text-gray-600 hover:text-orange-600"
            }`}
          onClick={() => handleTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CourseTabs;
