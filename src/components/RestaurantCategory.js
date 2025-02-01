
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const [showItems, setShowItems] = useState(false);
  const { data } = props;

  // Handle the accordion toggle
  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="border-b-2 p-6 shadow-lg bg-white mb-6 rounded-lg">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer transition-all duration-300"
        onClick={handleClick}
      >
        <span className="text-xl font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      {/* Accordion Body */}
      {showItems && (
        <div className="mt-4">
          <ItemList data={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;