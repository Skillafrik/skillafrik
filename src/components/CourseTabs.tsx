
import { useState } from 'react';

interface TabProps {
  tabs: string[];
  defaultTab?: string;
}

const CourseTabs = ({ tabs, defaultTab = tabs[0] }: TabProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="border-b border-gray-200">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === tab
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseTabs;
