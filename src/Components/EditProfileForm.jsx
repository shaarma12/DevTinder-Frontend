import React, { useState } from "react";

const EditProfileForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <div className="mt-14 md:mt-8 lg:mt-9 xl:mt-24">
      <div className="card w-96 bg-base-200 card-xl shadow-sm">
        <div className="card-body">
          <div className="flex justify-center items-center">
            <h2 className="card-title">Edit Your Profile</h2>
          </div>
          <fieldset className="fieldset mt-2">
            <legend className="fieldset-legend">First Name</legend>
            <input
              type="text"
              className="input input-primary"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last Name</legend>
            <input
              type="text"
              className="input input-primary"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input
              type="number"
              className="input input-primary"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender</legend>
            <input
              type="text"
              className="input input-primary"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">About</legend>
            <input
              type="text"
              className="input input-primary"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              className="input input-primary"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="justify-center card-actions mt-4">
            <button className="btn btn-primary" onClick={handleLogin}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
