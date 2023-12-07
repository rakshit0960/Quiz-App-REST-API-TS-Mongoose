const ProfileInfoPage: React.FC = () => {
  const profileInfo = {
    name: 'Rakshit Mehta',
    email: 'rakshit0960@gmail.com'
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <div>
        <p>
          <strong>Name:</strong> {profileInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {profileInfo.email}
        </p>
        {/* Add more profile information fields here */}
      </div>
    </div>
  );
};

export default ProfileInfoPage;
