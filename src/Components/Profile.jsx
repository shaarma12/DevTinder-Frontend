import React from "react";
import EditProfileForm from "./EditProfileForm";
import { useSelector } from "react-redux";

const Profile = () => {
  const userProfileData = useSelector((store) => store?.user);
  return (
    userProfileData && (
      <div>
        <EditProfileForm userProfileData={userProfileData} />
      </div>
    )
  );
};

export default Profile;
