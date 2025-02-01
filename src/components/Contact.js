import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Contact Us
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We would love to hear from you! Whether you have a question, feedback, or simply want to get in touch, feel free to reach out using the contact form below or through our contact details.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-800">Our Contact Info</h3>
            <div className="space-y-4 mt-4 text-lg text-gray-600">
              <p>
                <strong>Address:</strong> 123 Business St, City, Country
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> contact@yourcompany.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;