import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const getStrength = (password) => {
    if (password.length < 6)
      return {
        text: "Weak",
        color: "bg-red-500",
        width: "w-1/3",
      };

    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*?&]/.test(password);

    if (hasUpper && hasNumber && hasSpecial && password.length >= 8)
      return {
        text: "Strong",
        color: "bg-green-500",
        width: "w-full",
      };

    return {
      text: "Medium",
      color: "bg-yellow-500",
      width: "w-2/3",
    };
  };

  const strength = getStrength(formData.password);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      localStorage.setItem(
        "compostUser",
        JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        })
      );

      setSubmitting(false);
      setShowSuccess(true);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-700">
              Create Account
            </h1>

            <p className="text-gray-600 mt-3">
              Join Compost Connect and become part of a cleaner future.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Email */}

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Password */}

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-3 text-green-700 font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`${strength.width} ${strength.color} h-full rounded-full transition-all duration-300`}
                ></div>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Password Strength:
                <span className="font-semibold ml-1">
                  {strength.text}
                </span>
              </p>
            </div>
                        {/* Confirm Password */}

            <div>
              <label className="block mb-2 font-medium">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-3 text-green-700 font-medium"
                >
                  {showConfirm ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit Button */}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={submitting}
              className={`w-full py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 ${
                submitting
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-300"
              }`}
            >
              {submitting ? "Creating Account..." : "Create Account"}
            </motion.button>

            {/* Login Link */}

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-700 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
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
                  initial={{ scale: 0.8, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-2xl w-[90%] max-w-md p-8 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-6">
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
                    Account Created!
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    Welcome to{" "}
                    <span className="font-semibold text-green-700">
                      Compost Connect
                    </span>
                    .
                    <br />
                    Your account has been created successfully.
                  </p>

                  <button
                    onClick={() => {
                      setShowSuccess(false);
                      navigate("/login");
                    }}
                    className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
                  >
                    Go to Login
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