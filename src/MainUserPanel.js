// Arogya Sarthi App - Spiritual Theme + Improved Tagline Placement
import MapModal from "./MapModal";
import React, { useState } from 'react';
import { MapPin, PhoneCall, AlertCircle, ThermometerSun, Stethoscope, Ambulance, Mic } from 'lucide-react';
import { motion } from 'framer-motion';







function App() {

const [showMap, setShowMap] = useState(false);


  const [isRecording, setIsRecording] = useState(false);

  const handleVoiceCommand = () => {
    setIsRecording(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'hi-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      alert(`Your message: ${voiceText}\nIt has been sent to the nearest medical unit.`);
      setIsRecording(false);
    };

    recognition.onerror = () => {
      alert("Unable to access microphone. Please try again.");
      setIsRecording(false);
    };

    recognition.start();
  };

  return (
    <div className="bg-gradient-to-tr from-yellow-50 via-orange-100 to-white min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow-lg z-50 border-b border-yellow-200 pb-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 pt-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-orange-700">🕉️ Arogya Sarthi</h1>
            <p className="text-wrap text-orange-800 mt-2 italic">जहाँ आस्था मिले सुरक्षा से ...</p>
          </div>
          <nav className="space-x-6 text-gray-600 font-medium mt-4 md:mt-0">
            <a href="#home" className="hover:text-orange-600 transition">Home</a>
            <a href="#about" className="hover:text-orange-600 transition">About Us</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Left Panel */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold">📍 Your Current Location</h2>
          <div className="bg-white p-5 rounded-2xl shadow-lg border border-yellow-100 flex items-center space-x-4">
            <MapPin className="text-orange-600" />
            <div>
              <p className="font-medium">Ujjain, Sector 12, Ghat No. 4</p>
              <p className="text-sm text-gray-500">(Live location access enabled)</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold">🏥 Nearby Medical Services</h3>
          <ul className="space-y-3">
            <li className="bg-orange-50 p-4 rounded-xl flex justify-between items-center hover:bg-orange-100 transition">
              <div>
                <p className="font-semibold">First Aid Booth - 150m away</p>
                <p className="text-sm text-gray-500">Sector 12 | Available</p>
              </div>
              <button className="text-orange-700 font-medium">Navigate →</button>
            </li>
            <li className="bg-orange-50 p-4 rounded-xl flex justify-between items-center hover:bg-orange-100 transition">
              <div>
                <p className="font-semibold">Mobile Van Hospital - 300m away</p>
                <p className="text-sm text-gray-500">Ghat 5 | Queue: Low</p>
              </div>
              <button className="text-orange-700 font-medium">Navigate →</button>
            </li>
          </ul>

          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-2xl shadow-md w-full text-xl font-bold flex items-center justify-center space-x-3 transition duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <AlertCircle className="w-6 h-6" />
            <span>SOS Emergency</span>
          </motion.button>

          <motion.button
            onClick={handleVoiceCommand}
            className={`mt-4 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-2xl shadow-md w-full text-xl font-semibold flex items-center justify-center space-x-3 transition duration-300 ${isRecording ? 'opacity-70' : ''}`}
            whileTap={{ scale: 0.95 }}
          >

            <Mic className="w-6 h-6" />
            <span>{isRecording ? 'Recording...' : 'Voice Message to Medical Team'}</span>
          </motion.button>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-5 rounded-2xl shadow-lg border border-yellow-100 space-y-4">
            <h3 className="text-xl font-bold">📡 Live Features</h3>
            <div className="space-y-3">
              <Feature icon={<Ambulance className="text-red-500" />} title="Live Ambulance Tracking" />
              <Feature icon={<PhoneCall className="text-green-500" />} title="Doctor On Call" />
              <Feature icon={<ThermometerSun className="text-orange-500" />} title="Heat / Weather Alerts" />
              <Feature icon={<Stethoscope className="text-purple-500" />} title="Health & Sanitisation Awareness" />
              <Feature icon={<AlertCircle className="text-yellow-600" />} title="Threshold-Based Alerts" />
            </div>
          </div>

          <button
  onClick={() => setShowMap(true)}
  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-2xl shadow-md w-full text-xl font-semibold flex items-center justify-center space-x-3 transition duration-300"
>
  Show Ujjain Map 🗺️
</button>

{showMap && <MapModal onClose={() => setShowMap(false)} />}

        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-orange-100 text-center p-4 text-sm text-orange-700">
        © 2025 Arogya Sarthi | Dedicated to Public Welfare and Safety 🙏
      </footer>
    </div>
  );
}

export default App;


function Feature({ icon, title }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-orange-50 p-2 rounded-full">
        {icon}
      </div>
      <p className="text-gray-700 font-medium">{title}</p>
    </div>
  );
}
