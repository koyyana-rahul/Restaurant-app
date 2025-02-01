import { useParams } from "react-router";
import useFetchRestaurantsMenu from "../utils/useFetchRestaurantsMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantNestedCategory from "./RestaurantNestedCategory";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [filteredItemCategory, setFilteredItemCategory] = useState([]);
  const [filteredNestedItemCategory, setFilteredNestedItemCategory] = useState([]);
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const { resId } = useParams();
  const data = useFetchRestaurantsMenu(resId);

  // Fetch restaurant data
  const { name, cuisines, avgRating, costForTwoMessage } =
    data?.cards[2]?.card?.card?.info || {};

  useEffect(() => {
    if (data) {
      const itemCategory =
        data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      const nestedItemCategory =
        data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );

      setFilteredItemCategory(itemCategory);
      setFilteredNestedItemCategory(nestedItemCategory);
    }
  }, [data]);

  // Filter items based on Veg/Non-Veg selection
  const filterItems = (items) => {
    return items.map((category) => ({
      ...category,
      card: {
        ...category.card,
        card: {
          ...category.card.card,
          itemCards: category.card.card.itemCards?.filter((item) =>
            isVeg
              ? item.card.info.itemAttributes.vegClassifier === "VEG"
              : isNonVeg
              ? item.card.info.itemAttributes.vegClassifier === "NONVEG"
              : true
          ),
        },
      },
    }));
  };

  if (data === null) return <Shimmer />;

  return (
    <div className="mt-4 m-auto w-9/12">
      <div>
        <h1 className="font-extrabold text-center pt-5">{name}</h1>
        <h2 className="font-medium text-center">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h2>
      </div>

      {/* Filter Toggle Buttons */}
      <div className="flex justify-center space-x-4 mt-4">
        {/* Veg Toggle */}
        <div>
          <button
            onClick={() => {
              setIsVeg(true);
              setIsNonVeg(false);
            }}
            className={`${
              isVeg ? "bg-green-500 text-white" : "bg-gray-300"
            } px-4 py-2 rounded-lg`}
          >
            Veg
          </button>
        </div>

        {/* Non-Veg Toggle */}
        <div>
          <button
            onClick={() => {
              setIsNonVeg(true);
              setIsVeg(false);
            }}
            className={`${
              isNonVeg ? "bg-red-500 text-white" : "bg-gray-300"
            } px-4 py-2 rounded-lg`}
          >
            Non-Veg
          </button>
        </div>
      </div>

      {/* Render Filtered Item Categories */}
      <div>
        {filterItems(filteredItemCategory).map((category) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
          />
        ))}
      </div>

      {/* Render Filtered Nested Item Categories */}
      <div>
        {filterItems(filteredNestedItemCategory).map((category) => (
          <RestaurantNestedCategory
            key={category.card.card.title}
            data={category.card.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;