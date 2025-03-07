import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { removeRequest } from "../utils/requestSlice";

const ConnectionCard = ({ data, requestId }) => {
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
    <div>
      <div className="card xl:w-[55rem] lg:w-[55rem] md:w-[44rem] bg-base-200 card-md shadow-sm">
        <div className="card-body">
          <div className="flex gap-6">
            <div className="avatar">
              <div className="xl:w-24 md:w-24 lg:w-24 rounded-full">
                <img src={data?.photoURL} />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="card-title">
                    {data?.firstName + " " + data.lastName}
                  </h2>
                  <div className="flex justify-evenly w-44 my-1">
                    {data?.age && <p>{data?.age} Years old</p>}
                    {data?.age && data?.gender && (
                      <p className="text-4xl -mt-[1.35rem]">.</p>
                    )}
                    {data?.gender && <p>{data?.gender}</p>}
                  </div>
                </div>
                {status && (
                  <div className="justify-end card-actions absolute right-5">
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
              <p>{data?.about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
