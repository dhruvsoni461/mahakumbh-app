// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function UserLogin({ setUserAuthenticated }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username && password) {
//       setUserAuthenticated(true);
//       navigate('/user');
//     } else {
//       alert('Please enter valid credentials');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50">
//       <h1 className="text-3xl font-bold text-orange-700 mb-6">🕉️ Arogya Sarthi – User Login</h1>
//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
//         <input
//           type="text"
//           placeholder="Username"
//           className="w-full border border-orange-200 rounded px-4 py-2"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border border-orange-200 rounded px-4 py-2"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           onClick={handleLogin}
//           className="bg-orange-600 hover:bg-orange-700 text-white py-2 w-full rounded"
//         >
//           Login
//         </button>
//         <p className="text-sm text-center text-gray-500">
//           <a href="/admin-login" className="text-blue-600 hover:underline">Login as Admin</a>
//         </p>
//       </div>
//     </div>
//   );
// }
