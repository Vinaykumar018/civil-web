import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    const subject = encodeURIComponent(`New enquiry from ${name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Opens user email app with prefilled mail
    window.location.href = `mailto:hello@lallansinghcontractor.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-10 sm:py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-600">
            Find our location, services, and reach out to us directly.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          {/* 1. Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Get In Touch
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Address</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    445 Lakhanpur Housing Society
                    <br />
                    Vikas Nagar, Kanpur 208024
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    hello@lallansinghcontractor.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Call Us</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            {/* Products & Services (kept below info on left) */}
            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                Products & Services
              </h3>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-inner">
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Construction Services",
                    "Civil Construction",
                    "Roads And Highways Construction",
                    "Infrastructure Development",
                  ].map((service) => (
                    <li key={service} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Simple Contact Form (mailto) */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Send Us a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-inner"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition"
              >
                Send Email
              </button>

              <p className="text-xs text-gray-500 mt-2">
                This will open your email app with the message filled in. You
                just need to press send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
