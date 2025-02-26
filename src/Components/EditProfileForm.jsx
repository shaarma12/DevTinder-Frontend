import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addUser } from "../utils/userSlice";
import SavePopup from "./SavePopup";

const EditProfileForm = ({ userProfileData }) => {
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(userProfileData?.firstName);
  const [lastName, setLastName] = useState(userProfileData?.lastName);
  const [age, setAge] = useState(userProfileData?.age);
  const [about, setAbout] = useState(userProfileData?.about);
  const [photoURL, setPhotoURL] = useState(userProfileData?.photoURL);
  const [gender, setGender] = useState(userProfileData?.gender);
  const [error, setError] = useState("");
  const handleUpdate = async () => {
    try {
      const updatedUserProfile = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          about,
          photoURL,
          gender,
        },
        { withCredentials: true }
      );
      dispatch(addUser(updatedUserProfile?.data?.data));
      setToast(true);
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.error);
    }
  };

  setTimeout(() => {
    setToast(false);
  }, 5000);
  return (
    <>
      <div className="flex justify-center gap-14 mb-32">
        <div className="mt-14 md:mt-8 lg:mt-9 xl:mt-24">
          <div className="card w-96 bg-base-200 card-xl shadow-sm">
            <div className="card-body">
              <div className="flex justify-center items-center">
                <h2 className="card-title">Want To Edit Your Profile?</h2>
              </div>
              <fieldset className="fieldset mt-2">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  className="input input-primary"
                  placeholder="Type here"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setError("");
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  className="input input-primary"
                  placeholder="Type here"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setError("");
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="number"
                  className="input input-primary"
                  placeholder="Type here"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    setError("");
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  type="text"
                  className="input input-primary"
                  placeholder="Type here"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    setError("");
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input
                  type="text"
                  className="input input-primary"
                  placeholder="Type here"
                  value={about}
                  onChange={(e) => {
                    setAbout(e.target.value);
                    setError("");
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo</legend>
                <input
                  type="text"
                  className="input input-primary"
                  placeholder="Type here"
                  value={photoURL}
                  onChange={(e) => {
                    setPhotoURL(e.target.value);
                    setError("");
                  }}
                />
              </fieldset>
              <p className="text-red-500 text-sm">{error}</p>
              <div className="justify-center card-actions mt-4">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 w-96 shadow-sm flex mt-14 md:mt-8 lg:mt-9 xl:mt-24">
          <figure>
            <img src={photoURL} alt="userImg" className="w-full h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            <div className="flex justify-evenly w-44">
              {age && <p>{age} Years old</p>}
              {age && gender && <p className="text-4xl -mt-[1.35rem]">.</p>}
              {gender && <p className="">{gender}</p>}
            </div>
            <p>{about}</p>
          </div>
        </div>
      </div>
      {toast && <SavePopup message={"Profile Updated Successfully"} />}
    </>
  );
};

export default EditProfileForm;
