import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          QuizApp
        </Link>
        <div className="flex space-x-4">
          <Link to="/about" className="text-white hover:underline">
            About
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
          <Link to="/register" className="text-white hover:underline">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
