const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-4 ml-10">
      {/* Shimmer Loading Cards */}
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-56 bg-gray-200 h-64 m-2 rounded-lg shadow-sm relative overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;