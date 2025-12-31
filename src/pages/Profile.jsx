import React, { useState, useEffect } from "react";
import "./Profile.css";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: ""
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUser({ ...user, avatar: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Profile updated!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="avatar-section">
          {user.avatar ? (
            <img src={user.avatar} alt="Avatar" className="avatar" />
          ) : (
            <div className="avatar-placeholder">👤</div>
          )}
          <input
            type="file"
            id="avatar-upload"
            onChange={handleAvatarChange}
          />
          <label htmlFor="avatar-upload" className="upload-btn">
            Choose File
          </label>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleChange}
        />

        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default ProfilePage;
