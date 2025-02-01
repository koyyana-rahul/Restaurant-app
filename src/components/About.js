import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          About Us
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At Restaurant Hub, our mission is to provide innovative solutions
            that empower businesses and individuals. We are dedicated to
            delivering high-quality products and services that exceed
            expectations and drive success.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>
              Integrity: We believe in doing the right thing, even when no one
              is watching.
            </li>
            <li>
              Innovation: We constantly strive to push the boundaries of what’s
              possible.
            </li>
            <li>
              Customer Focus: Our customers are at the heart of everything we
              do.
            </li>
            <li>
              Excellence: We are committed to delivering the highest quality in
              all aspects of our work.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is composed of experts in [industry/field], and we bring
            years of experience and passion to every project we undertake. We
            believe in building lasting relationships with our clients, ensuring
            that their needs are met with the utmost care and attention to
            detail.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </button>
            <button className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
