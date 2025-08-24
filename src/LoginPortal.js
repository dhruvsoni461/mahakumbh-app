import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPortal({ setAdminAuthenticated, setUserAuthenticated }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // detect mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const handleUserLogin = () => {
    if (username && password) {
      setUserAuthenticated(true);
      navigate("/user");
    } else {
      alert("कृपया यूजरनेम और पासवर्ड डालें");
    }
  };

  const handleAdminLogin = () => {
    if (adminId === "healthteam123") {
      setAdminAuthenticated(true);
      navigate("/admin");
    } else {
      alert("❌ Invalid Admin ID");
    }
  };

  // animation variants
  const panelAnimate = isMobile
    ? { y: isAdmin ? "100%" : "0%" } // vertical mobile
    : { x: isAdmin ? "0%" : "0%" }; // horizontal desktop
    

  const panelTransition = { type: "spring", stiffness: 120, damping: 15 };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 px-4 py-8">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Form Section */}
        <div className="relative w-full md:w-1/2 bg-white p-8 flex flex-col items-center justify-center z-20">
          <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
            {isAdmin ? "🛡️ Admin Login" : "🧘‍♂️ User Login"}
          </h2>

          <AnimatePresence mode="popLayout">
            {!isAdmin ? (
              <motion.div
                key="userForm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-md"
              >
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full mb-4 px-4 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mb-4 px-4 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={handleUserLogin}
                  className="w-full py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
                >
                  Login as User
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="adminForm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-md"
              >
                <input
                  type="text"
                  placeholder="Enter Admin ID"
                  className="w-full mb-4 px-4 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-200"
                  onChange={(e) => setAdminId(e.target.value)}
                />
                <button
                  onClick={handleAdminLogin}
                  className="w-full py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
                >
                  Login as Admin
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Switch Button - Always Visible */}
          <div className="mt-6">
            <button
              onClick={() => setIsAdmin((s) => !s)}
              className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
            >
              Switch to {isAdmin ? "User Login" : "Admin Login"}
            </button>
          </div>
        </div>

        {/* Orange Panel - Absolute Positioned for Smooth Slide */}
        <div className="relative w-full md:w-1/2 overflow-hidden bg-white">
          <motion.div
            initial={false}
            animate={panelAnimate}
            transition={panelTransition}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              {isAdmin ? "केवल स्वास्थ्य टीम के लिए" : "सामान्य उपयोगकर्ताओं के लिए"}
            </h3>
            <p className="text-orange-100 text-center max-w-sm">
              {isAdmin
                ? "Admin panel में SOS reports और location data दिखेगा।"
                : "User panel में live location, medical services और SOS option मिलेगा।"}
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
