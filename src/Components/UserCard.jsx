import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { updateFeed } from "../utils/feedSlice";

const UserCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleRequest = async (status, userId) => {
    await axios.post(
      BASE_URL + `/request/send/${status}/${userId}`,
      {},
      { withCredentials: true }
    );
    dispatch(updateFeed(userId));
  };
  return (
    <div className="card bg-base-200 w-96 shadow-sm flex mt-14 md:mt-8 lg:mt-9 xl:mt-24">
      <figure>
        <img src={data?.photoURL} alt="userImg" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.firstName + " " + data?.lastName}</h2>
        <div className="flex justify-evenly w-44">
          {data?.age && <p>{data?.age} Years old</p>}
          {data?.age && data?.gender && (
            <p className="text-4xl -mt-[1.35rem]">.</p>
          )}
          {data?.gender && <p className="">{data?.gender}</p>}
        </div>
        <p>{data?.about}</p>
        <div className="card-actions justify-center gap-14 mt-4">
          <button
            className="btn btn-error btn-soft"
            onClick={() => handleRequest("ignored", data?._id)}
          >
            Ignored
          </button>
          <button
            className="btn btn-primary btn-soft"
            onClick={() => handleRequest("interested", data?._id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
