import { useState, useEffect } from "react";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import Shimmer from "./Shimmer";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const RestaurantPromoted = WithPromotedLabel(RestaurantCard);

  const data = useFetchRestaurants();
  useEffect(() => {
    if (data) {
      setListOfRestaurants(data);
      setFilteredRestaurants(data);
    }
  }, [data]);

  if (data.length === 0) return <Shimmer />;

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-6">
      {/* Search Section */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex w-full md:w-2/3 items-center relative">
          <input
            type="text"
            className="w-full py-3 px-4 text-gray-700 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>

        {/* Toggle Filters Button */}
        <div className="flex mt-4 md:mt-0">
          <button
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 transition"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-wrap gap-4 justify-center mb-8">
          {/* Top Rated Toggle */}
          <label className="flex items-center text-sm font-medium text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={isTopRated}
              onChange={() => {
                setIsTopRated(!isTopRated);
                const filteredList = listOfRestaurants.filter(
                  (res) => res?.card?.card?.info?.avgRating < 4.0
                );
                setFilteredRestaurants(
                  isTopRated ? listOfRestaurants : filteredList
                );
              }}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Top Rated</span>
          </label>

          {/* Sort Buttons */}
          <div className="flex gap-4">
            <button
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-200 focus:ring-2 focus:ring-blue-400 transition"
              onClick={() => {
                const sorted = [...filteredRestaurants].sort(
                  (a, b) =>
                    a.card.card.info.sla.deliveryTime -
                    b.card.card.info.sla.deliveryTime
                );
                setFilteredRestaurants(sorted);
              }}
            >
              Sort by Delivery Time
            </button>

            <button
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-200 focus:ring-2 focus:ring-blue-400 transition"
              onClick={() => {
                const sorted = [...filteredRestaurants].sort(
                  (a, b) =>
                    a.card.card.info.costForTwo - b.card.card.info.costForTwo
                );
                setFilteredRestaurants(sorted);
              }}
            >
              Cost: Low to High
            </button>

            <button
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-200 focus:ring-2 focus:ring-blue-400 transition"
              onClick={() => {
                const sorted = [...filteredRestaurants].sort(
                  (a, b) =>
                    b.card.card.info.costForTwo - a.card.card.info.costForTwo
                );
                setFilteredRestaurants(sorted);
              }}
            >
              Cost: High to Low
            </button>
            <div>
              <label>UserName :</label>
            <input className="bg-gray-400 border-black px-1 shadow-2xl hover:border-black " />
              </div>
          </div>
        </div>

         
      )}


     

      {/* Restaurants List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredRestaurants.map((res) => (
          <Link
            to={"/restaurant/" + res?.card?.card?.info.id}
            key={res?.card?.card?.info.id}
          >
            {res?.card?.card?.info?.promoted ? (
              <RestaurantPromoted resData={res?.card?.card?.info} />
            ) : (
              <RestaurantCard resData={res?.card?.card?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
