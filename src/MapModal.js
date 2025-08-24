import React from 'react';

const MapModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Ujjain Location</h2>
        <iframe
          title="Ujjain Map"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCvIBzR1ft6ztWEV6TBf0WKu_3OZnprVbc&q=Ujjain,Madhya+Pradesh"
        ></iframe>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
