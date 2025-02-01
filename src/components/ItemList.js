
import { useDispatch } from "react-redux";
import { RESTAURANT_LOGO_URL } from "../utils/constants";
import {
  VEGETARIAN_LOGO_URL,
  NONVEGETARIAN_LOGO_URL,
} from "../utils/constants";

import { addItem } from "../utils/cardSlice";

const ItemList = (props) => {
  const { data } = props;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item) )
  }

  return (
    <div className="w-full">
      {data.map((item) => (
        <div
          className="flex justify-between items-center p-4 m-2 border-b rounded-lg bg-white shadow hover:shadow-lg transition-all"
          key={item.card.info.id}
        >
          {/* Item Details */}
          <div className="w-8/12">
            <div className="flex items-center mb-2">
              <img
                className="w-5 h-5 mr-2"
                src={
                  item.card.info.itemAttribute.vegClassifier === "VEG"
                    ? VEGETARIAN_LOGO_URL
                    : NONVEGETARIAN_LOGO_URL
                }
                alt={item.card.info.itemAttribute.vegClassifier}
              />
              <h1 className="font-semibold text-gray-800 text-lg">
                {item.card.info.name}
              </h1>
            </div>
            <h2 className="text-gray-700 font-medium">
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </h2>

            {/* Rating */}
            <div className="flex items-center mt-2">
              <span className="text-green-500 text-xl mr-1">★</span>
              <span className="text-gray-700">
                {item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>
            </div>

            <p className="text-gray-600 text-sm mt-1">
              {item.card.info.description || "No description available."}
            </p>
          </div>

          {/* Image & Add Button */}
          <div className="w-4/12 flex flex-col items-center">
            {item.card.info.imageId ? (
              <div className="relative">
                <img
                  className="w-28 h-28 object-cover rounded-md mb-2"
                  src={RESTAURANT_LOGO_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                />
                <button className="w-full border-t-2 border-gray-200 text-center py-2 text-green-500 font-bold hover:bg-gray-100 transition" onClick={() => handleAddItem(item)}>
                  ADD
                </button>
              </div>
            ) : (
              <button className="w-full border-t-2 border-gray-200 text-center py-2 text-green-500 font-bold hover:bg-gray-100 transition"onClick={() =>handleAddItem(item)}>
                ADD
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;