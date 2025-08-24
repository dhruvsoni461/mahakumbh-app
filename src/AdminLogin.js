// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AdminLogin({ setAdminAuthenticated }) {
//   const [adminId, setAdminId] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (adminId === 'healthteam123') {
//       setAdminAuthenticated(true);
//       navigate('/admin');
//     } else {
//       alert('Invalid Admin ID');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50">
//       <h1 className="text-3xl font-bold text-orange-700 mb-6">🕉️ Arogya Sarthi – Admin Login</h1>
//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
//         <input
//           type="text"
//           placeholder="Enter Admin ID"
//           className="w-full border border-orange-200 rounded px-4 py-2"
//           onChange={(e) => setAdminId(e.target.value)}
//         />
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full rounded"
//         >
//           Login as Admin
//         </button>
//         <p className="text-sm text-center text-gray-500">
//           <a href="/user-login" className="text-blue-600 hover:underline">Login as User</a>
//         </p>
//       </div>
//     </div>
//   );
// }
