import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRequest } from "../utils/requestSlice";
import { BASE_URL } from "../utils/constant";

const FriendsCard = ({ data, requestId }) => {
  const { firstName, lastName, photoURL, age, gender, about } = data;
  const fullName = firstName + " " + lastName;
  const dispatch = useDispatch();
  const status = useSelector((store) => store?.button);
  const handleRequest = async (reqId, status) => {
    await axios.post(
      BASE_URL + `/request/review/${status}/${reqId}`,
      {},
      { withCredentials: true }
    );
    dispatch(removeRequest(reqId));
  };
  return (
    <div className="card bg-base-200 shadow-sm h-[28rem] w-full">
      <figure>
        <img src={photoURL} alt="userImg" className="min-w-80 min-h-60 mt-20" />
      </figure>
      <div className="card-body -mt-4">
        <h2 className="card-title text-2xl">{fullName}</h2>
        <div className="flex justify-evenly w-44">
          {age && <p>{age} Years old</p>}
          {age && gender && <p className="text-4xl -mt-[1.35rem]">.</p>}
          {gender && <p className="">{gender}</p>}
        </div>
        <p>{about.length > 100 ? about.slice(0, 100) + "..." : about}</p>
      </div>
      {status && (
        <div className="flex items-center justify-center card-actions -mt-3 mb-4 gap-5">
          <button
            className="btn btn-error btn-outline rounded-full"
            onClick={() => handleRequest(requestId, "rejected")}
          >
            Reject
          </button>
          <button
            className="btn btn-outline btn-primary rounded-full"
            onClick={() => handleRequest(requestId, "accepted")}
          >
            Accept
          </button>
        </div>
      )}
    </div>
  );
};

export default FriendsCard;
