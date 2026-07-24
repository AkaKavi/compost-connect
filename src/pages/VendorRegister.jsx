import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VendorRegister() {
  const [formData, setFormData] = useState({
    phone: "",
    shopType: "",
    address: "",
    wasteType: "",
    quantity: "",
    pickupTime: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScRVpFkHYmsn4TJSKlG_3z3uqnscYGZf1LfM3qqWHGq51SJmA/formResponse";

    const data = new FormData();

    data.append("entry.201961072", formData.phone);
    data.append("entry.849426664", formData.shopType);
    data.append("entry.696776802", formData.address);
    data.append("entry.1101391539", formData.wasteType);
    data.append("entry.87174922", formData.quantity);
    data.append("entry.1637553154", formData.pickupTime);

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setFormData({
        phone: "",
        shopType: "",
        address: "",
        wasteType: "",
        quantity: "",
        pickupTime: "",
      });

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">
              Vendor Registration
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Join Compost Connect and schedule regular organic waste pickups
              from your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Phone Number */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Shop Type */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Shop Type
              </label>

              <select
                name="shopType"
                value={formData.shopType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              >
                <option value="">Select Shop Type</option>
                <option value="Vegetable Vendor">Vegetable Vendor</option>
                <option value="Fruit Vendor">Fruit Vendor</option>
                <option value="Grocery Store">Grocery Store</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Hotel">Hotel</option>
                <option value="Cafeteria">Cafeteria</option>
                <option value="Food Stall">Food Stall</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Business Address */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Business Address
              </label>

              <textarea
                rows="4"
                name="address"
                placeholder="Enter your business address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Waste Type */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Waste Type
              </label>

              <select
                name="wasteType"
                value={formData.wasteType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              >
                <option value="">Select Waste Type</option>
                <option value="Vegetable Waste">Vegetable Waste</option>
                <option value="Fruit Waste">Fruit Waste</option>
                <option value="Food Waste">Food Waste</option>
                <option value="Mixed Organic Waste">
                  Mixed Organic Waste
                </option>
                <option value="Garden Waste">Garden Waste</option>
              </select>
            </div>
                        {/* Estimated Waste */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Estimated Waste (kg/day)
              </label>

              <input
                type="text"
                name="quantity"
                placeholder="Example: 50 kg"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Preferred Pickup Time */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Preferred Pickup Time
              </label>

              <select
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              >
                <option value="">Select Pickup Time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={submitting}
              className={`w-full py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 ${
                submitting
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-300"
              }`}
            >
              {submitting ? "Submitting..." : "Register as Vendor"}
            </motion.button>
          </form>

          {/* Success Modal */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.8, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-2xl max-w-md w-[90%] p-8 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h2 className="text-3xl font-bold text-green-700 mb-3">
                    Registration Successful!
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    Thank you for joining{" "}
                    <span className="font-semibold text-green-700">
                      Compost Connect
                    </span>
                    .
                    <br />
                    Our team will contact you shortly.
                  </p>

                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}