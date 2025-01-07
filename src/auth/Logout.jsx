import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../auth/authSlice";
import { toast } from 'react-toastify';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    if (!isAuthenticated) {
      toast.error('You are not logged in. Please log in first.');
      navigate('/login');
      return;
    }

    if (window.confirm('Are you sure you want to log out?')) {
      try {
        dispatch(logout());
        toast.success('Logged out successfully!');
        navigate('/login');
      } catch (error) {
        console.error('Logout Error:', error);
        toast.error('An error occurred while logging out. Please try again.');
      }
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
