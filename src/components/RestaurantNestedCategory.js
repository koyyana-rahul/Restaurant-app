import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantNestedCategory = (props) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { data } = props;

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="shadow-md rounded-lg border p-6 bg-white mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{data.title}</h2>
      {data.categories.map((nestedCategory, index) => (
        <div
          key={index}
          className={`border rounded-lg mb-4 p-4 transition-shadow ${
            openIndex === index ? "shadow-lg bg-gray-50" : "shadow-sm"
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <span className="font-medium text-gray-700">
              {nestedCategory.title}{" "}
              <span className="text-gray-500">
                ({nestedCategory.itemCards.length})
              </span>
            </span>
            <span className="text-gray-600 text-lg">
              {openIndex === index ? "˄" : "˅"}
            </span>
          </div>
          {openIndex === index && (
            <div className="mt-4">
              <ItemList data={nestedCategory.itemCards} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantNestedCategory;