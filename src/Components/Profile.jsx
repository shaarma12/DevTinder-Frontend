import React from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import EditProfileForm from "./EditProfileForm";

const Profile = () => {
  const userProfile = useSelector((store) => store?.user);
  console.log("userProfile", userProfile);
  return (
    <div className="flex justify-center gap-14 mb-32">
      <EditProfileForm />
      <UserCard data={userProfile} />
    </div>
  );
};

export default Profile;
