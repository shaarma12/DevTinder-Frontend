import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 md:mt-12 lg:mt-12 xl:mt-24">
      <div className="card w-96 bg-base-200 card-xl shadow-sm">
        <div className="card-body">
          <div className="flex justify-center items-center">
            <h2 className="card-title text-5xl">DevTinder</h2>
          </div>
          <fieldset className="fieldset mt-2">
            <legend className="fieldset-legend text-lg">Email</legend>
            <input
              type="email"
              className="input input-primary"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type="password"
              className="input input-primary"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="justify-center card-actions mt-4">
            <button className="btn btn-primary" onClick={handleLogin}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
