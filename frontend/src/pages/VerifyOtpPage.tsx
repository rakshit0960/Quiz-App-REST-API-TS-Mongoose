// src/components/VerifyOTP.tsx
import React, { useState } from 'react';

const VerifyOtpPage: React.FC = () => {
  const [otp, setOTP] = useState('');

  const handleVerify = () => {
    // Implement your OTP verification logic here
    console.log('Entered OTP:', otp);
    // Add logic to handle OTP verification
  };

  const handleResend = () => {
    // Implement your OTP resend logic here
    console.log('Resending OTP...');
    // Add logic to resend OTP
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mr-2 focus:outline-none focus:shadow-outline-blue"
            onClick={handleVerify}
          >
            Verify
          </button>
          <button
            className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray"
            onClick={handleResend}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
