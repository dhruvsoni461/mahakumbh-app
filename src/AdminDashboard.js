import React from 'react';

const dummySOS = [
  { location: 'Sector 12, Ghat 4', time: '9:32 AM' },
  { location: 'Sector 7, Gate 3', time: '10:15 AM' },
  { location: 'Ghat 1', time: '10:42 AM' },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">🛡️ Admin Dashboard – Emergency Overview</h1>
      <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-red-600">🚨 Total SOS Reports: {dummySOS.length}</h2>
        <ul className="space-y-2">
          {dummySOS.map((sos, index) => (
            <li key={index} className="border border-orange-200 p-3 rounded bg-orange-100">
              📍 <strong>{sos.location}</strong> — <span className="text-sm text-gray-600">{sos.time}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Monitoring critical zones. Stay alert & respond quickly.</p>
        </div>
      </div>
    </div>
  );
}
