// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart,removeItem } from "../utils/cardSlice";

// const Cart = () => {
//   const dispatch= useDispatch();
//   const cartItems = useSelector((store) => store.cart.items);

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   }

//   const handleRemoveItem = () => {
//     dispatch(removeItem());
//   }
//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="flex justify-between">
//           <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center uppercase">
//             Your Cart
//           </h1>
//           <button className="bg-sky-500 hover:bg-sky-700 ..."
//           onClick={handleClearCart}
//           >
//             Clear Cart
//           </button>
//           <button className="bg-sky-500 hover:bg-sky-700 ..."
//           onClick={handleRemoveItem}
//           >
//             Remove Item
//           </button>
//         </div>
//         <div>
//           {cartItems.length===0 && <h1 className="text-center font-bold mt-4">Cart is empty. Add items to the cart</h1>}
//           <ItemList data={cartItems} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cardSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center uppercase">
            Your Cart
          </h1>
          <div className="space-x-4">
            <button
              className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-md transition duration-300 
              hover:bg-red-600 hover:shadow-lg active:scale-95"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md transition duration-300 
              hover:bg-blue-600 hover:shadow-lg active:scale-95"
              onClick={handleRemoveItem}
            >
              Remove Item
            </button>
          </div>
        </div>
        <div>
          {cartItems.length === 0 && (
            <h1 className="text-center font-bold mt-4">
              Cart is empty. Add items to the cart
            </h1>
          )}
          <ItemList data={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
