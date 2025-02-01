import React from 'react';

const Groceries = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-teal-600">Groceries Store</h1>
        <p className="text-lg text-gray-500 mt-2">Browse our wide selection of fresh groceries and essentials</p>
      </div>

      {/* Groceries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Grocery Item 1 */}
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150"
            alt="Grocery Item"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-medium text-gray-800">Fresh Apples</h3>
          <p className="text-teal-600 font-semibold">$3.99 / kg</p>
        </div>

        {/* Grocery Item 2 */}
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150"
            alt="Grocery Item"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-medium text-gray-800">Organic Bananas</h3>
          <p className="text-teal-600 font-semibold">$2.49 / bunch</p>
        </div>

        {/* Grocery Item 3 */}
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150"
            alt="Grocery Item"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-medium text-gray-800">Broccoli</h3>
          <p className="text-teal-600 font-semibold">$1.99 / bunch</p>
        </div>

        {/* Grocery Item 4 */}
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150"
            alt="Grocery Item"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-medium text-gray-800">Carrots</h3>
          <p className="text-teal-600 font-semibold">$2.49 / kg</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-600">
        <p>© 2025 Groceries Store. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Groceries;