import { useContext } from "react";
import { RESTAURANT_LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData;

  const {loggedIn} = useContext(UserContext);
  // console.log(UserName);

  return (
    <div className="w-56 bg-white rounded-lg shadow-lg p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 relative">
      {/* "Ad" Label on top */}
      {props.promoted && (
        <label className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-bold z-10">
          Ad
        </label>
      )}
      <img
        className="w-full h-40 rounded-lg object-cover mb-3 transition-transform transform hover:scale-105"
        src={RESTAURANT_LOGO_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="font-semibold text-lg text-gray-800 truncate">{name}</h2>
          <p className="text-sm text-gray-500 pt-1">{cuisines.join(", ")}</p>
        </div>
        <div className="flex items-center justify-between pt-3">
          {/* Rating */}
          <div className="flex items-center text-yellow-500">
            <span className="text-sm font-semibold">{avgRating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-4 h-4 ml-1"
            >
              <path d="M10 15l-3.5 2 1-4-3-2.5 4-0.5L10 3l1.5 4.5 4 0.5-3 2.5 1 4z" />
            </svg>
          </div>
          {/* Cost */}
          <h3 className="text-lg font-semibold text-gray-800">{costForTwo / 100} Rs.</h3>
        </div>
        <p className="text-sm text-gray-600 pt-2">{sla.deliveryTime} mins</p>
        <h4>{loggedIn}</h4>
      </div>
    </div>
  );
};

// Higher Order Component (HOC) to add "Ad" label
export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <RestaurantCard {...props} promoted={true} />
      </div>
    );
  };
};

export default RestaurantCard;
