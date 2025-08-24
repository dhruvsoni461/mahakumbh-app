import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPortal from './LoginPortal'; // New combined login file
import AdminDashboard from './AdminDashboard';
import MainUserPanel from './MainUserPanel';

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Redirect to /login by default */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Unified login portal */}
        <Route
          path="/login"
          element={
            <LoginPortal
              setUserAuthenticated={setUserAuthenticated}
              setAdminAuthenticated={setAdminAuthenticated}
            />
          }
        />

        {/* User dashboard route */}
        <Route
          path="/user"
          element={userAuthenticated ? <MainUserPanel /> : <Navigate to="/login" />}
        />

        {/* Admin dashboard route */}
        <Route
          path="/admin"
          element={adminAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
