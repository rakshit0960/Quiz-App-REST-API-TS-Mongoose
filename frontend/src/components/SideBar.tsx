// src/components/SideBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 py-4">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile Avatar"
          className="rounded-full mb-4"
        />
        <p className="text-lg font-bold">User Name</p>
      </div>
      <div className="mt-8">
        <Link to="/profile/profile-info" className="block py-2 px-4 hover:bg-gray-700">
          Profile Info
        </Link>
        <Link to="/profile/create-quiz" className="block py-2 px-4 hover:bg-gray-700">
          Create Quiz
        </Link>
        <Link to="/profile/publish-quiz" className="block py-2 px-4 hover:bg-gray-700">
          Publish Quiz
        </Link>
        <Link to="/profile/take-exam" className="block py-2 px-4 hover:bg-gray-700">
          Take Exam
        </Link>
        <Link to="/profile/results" className="block py-2 px-4 hover:bg-gray-700">
          Results
        </Link>
        <Link to="/profile/favourite-question" className="block py-2 px-4 hover:bg-gray-700">
          Favourite Questions
        </Link>
        <Link
          to="/profile/deactivate-account"
          className="block py-2 px-4 hover:bg-gray-700 text-red-500"
          // Applying a unique class or inline style for the "Deactivate Account" link
          style={{ fontWeight: 'bold' }}
        >
          Deactivate Account
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
