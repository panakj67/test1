import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user1 = useSelector((state) => state.users.user);
   const user = {
    name:  user1.name || "xtylish",
    email: user1.email || "pankajsoni@example.com",
    bio: "Full Stack Developer passionate about building scalable web applications. Loves working with React, Node.js, and MongoDB.",
    location: "Bhopal, India",
    joined: "January 2023",
    interests: ["Web Development", "Open Source", "AI & ML", "Mentoring"],
    avatar: "https://i.pravatar.cc/150?img=65"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-indigo-500"
          />

          <div>
            <h2 className="text-3xl font-bold text-indigo-700">{user.name}</h2>
            <p className="text-gray-600 text-lg">{user.email}</p>
            <p className="mt-4 text-gray-800">{user.bio}</p>

            <div className="mt-4 space-y-2">
              <p><strong className="text-indigo-600">Location:</strong> {user.location}</p>
              <p><strong className="text-indigo-600">Joined:</strong> {user.joined}</p>
              <p>
                <strong className="text-indigo-600">Interests:</strong>{" "}
                <span className="text-gray-700">{user.interests.join(', ')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
