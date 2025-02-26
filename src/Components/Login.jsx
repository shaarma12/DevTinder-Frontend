import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [trigger, settrigger] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data);
    }
  };
  const handleSignup = async () => {
    try {
      const signupRes = await axios.post(
        BASE_URL + "/auth/signup",
        {
          email,
          password,
          firstName,
          lastName,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(signupRes?.data?.data));
      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center my-32">
      <div className="card w-96 bg-base-200 card-xl shadow-sm">
        <div className="card-body">
          <div className="flex justify-center items-center">
            <h2 className="card-title text-5xl mb-2">DevTinder</h2>
          </div>
          {trigger === true && (
            <>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-lg">First Name</legend>
                <input
                  type="firstName"
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
                <legend className="fieldset-legend text-lg">Last Name</legend>
                <input
                  type="lastName"
                  className="input input-primary"
                  placeholder="Type here"
                  value={lastName}
                  onChange={(e) => {
                    setlastName(e.target.value);
                    setError("");
                  }}
                />
              </fieldset>
            </>
          )}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Email</legend>
            <input
              type="email"
              className="input input-primary"
              placeholder="Type here"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type="password"
              className="input input-primary"
              placeholder="Type here"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </fieldset>
          <p className="text-red-500 text-sm">{error}</p>
          <p
            className="text-sm text-yellow-300 cursor-pointer"
            onClick={() => settrigger(!trigger)}
          >
            {trigger
              ? "Existing user? Sign in!"
              : "New user? Sign up and start exploring!"}
          </p>
          <div className="justify-center card-actions mt-4">
            <button
              className="btn btn-primary"
              onClick={trigger ? handleSignup : handleLogin}
            >
              {trigger ? "Sign up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
