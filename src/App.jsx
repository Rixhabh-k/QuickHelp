import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SettingPage from './pages/SettingPage';
import UserPage from './pages/UserPage';
import SOS from './components/SOS';
import Content from './components/Content';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import Guide from './pages/Guide'

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [isUserAdded, setIsUserAdded] = useState(false);

  // Check localStorage once on mount
  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    if (user) {
      setIsUserAdded(true);

      // 👇 If user is already registered but on /register, redirect to home
      if (currentPath === '/register') {
        navigate('/');
      }
    } else {
      // 👇 If user not registered, force redirect to /register
      if (currentPath !== '/register') {
        navigate('/register');
      }
    }
  }, [currentPath, navigate]);

  return (
    <div className="px-4 md:px-10">
      <Navbar />

      <Routes>
        <Route
          path="/register"
          element={<HomePage setIsUserAdded={setIsUserAdded} />}
        />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/user-profile" element={<UserPage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

const MainPage = () => (
  <>
    <SOS />
    <Content />
    <Footer />
  </>
);

export default App;
