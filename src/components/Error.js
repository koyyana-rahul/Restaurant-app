import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-6xl text-red-500 font-extrabold mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Something Went Wrong
        </h2>
        <p className="text-lg text-gray-500 mb-4">
          We're sorry, but it seems like we encountered an issue. Please try again later.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Error Details:</h3>
          <p className="text-gray-600">
            <strong>Status:</strong> {err.status} <br />
            <strong>Message:</strong> {err.statusText}
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;