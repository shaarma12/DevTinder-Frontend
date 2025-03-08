import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";

const Navbar = () => {
  const loginUserData = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      dispatch(removeFeed());
      return navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm fixed top-0 z-10">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost xl:text-xl md:text-xl lg:text-xl text-2xl"
          >
            DevTinder
          </Link>
        </div>
        {loginUserData && (
          <div className="flex justify-center items-center gap-5">
            <p className="xl:block lg:block md:block hidden">
              Welcome, {loginUserData?.firstName}
            </p>
            <div className="flex-none">
              <div className="dropdown dropdown-end mr-6">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={loginUserData?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link
                      to="/"
                      className="justify-between xl:text-sm lg:text-sm md:text-sm text-base"
                    >
                      Home
                    </Link>
                    <Link
                      to="/profile"
                      className="justify-between xl:text-sm lg:text-sm md:text-sm text-base"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/connections"
                      className="xl:text-sm lg:text-sm md:text-sm text-base"
                    >
                      Friends
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/request"
                      className="xl:text-sm lg:text-sm md:text-sm text-base"
                    >
                      Pending Requests
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleLogout}
                      className="xl:text-sm lg:text-sm md:text-sm text-base"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
