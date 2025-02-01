import { WEB_LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [authBtn, setAuthBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedIn} = useContext(UserContext);
  // console.log(Name);


  //subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <header className="bg-yellow-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img className="w-16 h-16 object-contain" src={WEB_LOGO_URL} alt="Logo" />
          <h1 className="text-2xl font-bold text-gray-800">Restaurant Hub</h1>
        </div>

        {/* Navigation Links and Buttons */}
        <nav className="flex items-center space-x-8">
          {/* Online Status */}
          <div className="flex items-center text-sm font-medium text-gray-700 space-x-2">
            <span
              className={`w-3 h-3 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span>{onlineStatus ? "Online" : "Offline"}</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/groceries"
                className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
              >
                Groceries
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
              >
                Cart({cartItems.length} items)
              </Link>
            </li>
            <li>
              {loggedIn}
            </li>
          </ul>

          {/* Authentication Button */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            onClick={() => {
              setAuthBtn(authBtn === "Login" ? "Logout" : "Login");
            }}
          >
            {authBtn}
          </button>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;