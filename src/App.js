import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TriagemPage from './pages/TriagemPage'; // Se você criou a TriagemPage

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/triagem"
          element={isLoggedIn ? <TriagemPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
