import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [remember, setRemember] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setError("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    const storedUser = JSON.parse(
      localStorage.getItem("compostUser")
    );

    setTimeout(() => {
      if (!storedUser) {
        setError("No account found. Please sign up first.");
        setSubmitting(false);
        return;
      }

      if (
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        setShowSuccess(true);

        setFormData({
          email: "",
          password: "",
        });

        setSubmitting(false);
      } else {
        setError("Invalid email or password.");
        setSubmitting(false);
      }
    }, 1200);
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
              Welcome Back
            </h1>

            <p className="text-gray-600 mt-3">
              Login to continue your journey with Compost Connect.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
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
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  type={
                    showPassword ? "text" : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 outline-none focus:ring-2 focus:ring-green-500"
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
            </div>

            {/* Error */}

            {error && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="bg-red-100 text-red-700 px-4 py-3 rounded-xl"
              >
                {error}
              </motion.div>
            )}

            {/* Remember Me */}

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() =>
                    setRemember(!remember)
                  }
                  className="accent-green-600"
                />

                Remember Me
              </label>

              <button
                type="button"
                className="text-green-700 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
                        {/* Login Button */}

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
              {submitting ? "Logging In..." : "Login"}
            </motion.button>

            {/* Signup Link */}

            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-green-700 font-semibold hover:underline"
              >
                Sign Up
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
                    Login Successful!
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    Welcome back to{" "}
                    <span className="font-semibold text-green-700">
                      Compost Connect
                    </span>
                    .
                    <br />
                    Redirecting you to Vendor Registration...
                  </p>

                  <button
                    onClick={() => {
                      setShowSuccess(false);
                      navigate("/dashboard");
                    }}
                    className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
                  >
                    Continue
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
