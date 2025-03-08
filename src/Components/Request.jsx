import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import ConnectionCard from "./ConnectionCard";
import NoDataCard from "./NoDataCard";
import { addRequest } from "../utils/requestSlice";
import { addBtnStatus } from "../utils/buttonSlice";
import FriendsCard from "./FriendsCard";

const Request = () => {
  const dispatch = useDispatch();
  const pendingRequest = useSelector((store) => store?.pending);

  const getPendingRequests = async () => {
    const pendingRequestRespone = await axios.get(BASE_URL + "/user/request", {
      withCredentials: true,
    });
    dispatch(addRequest(pendingRequestRespone?.data.data));
  };

  useEffect(() => {
    getPendingRequests();
    dispatch(addBtnStatus(true));

    return () => {
      dispatch(addBtnStatus(false));
    };
  }, [dispatch]);

  if (pendingRequest && pendingRequest.length === 0) {
    return (
      <NoDataCard
        handleData={{
          upperPara: "No Pending Requests",
          lowerPara: "You're all caught up!",
        }}
      />
    );
  }

  return (
    pendingRequest && (
      <div className="mt-24 flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold xl:mb-4 lg:mb-4 md:mb-4 xl:block lg:block md:block hidden">
          Pending Requests
        </h1>
        <div className="xl:block lg:block md:block hidden overflow-hidden overflow-y-scroll scroll-smooth xl:h-[27rem] lg:h-[22rem] md:h-[23rem] h-[50rem] no-scrollbar">
          <div className="flex flex-col gap-4">
            {pendingRequest.map((i) => {
              return (
                <ConnectionCard
                  key={i._id}
                  data={i?.fromUserId}
                  requestId={i._id}
                />
              );
            })}
          </div>
        </div>
        <div className="xl:hidden lg:hidden md:hidden block overflow-hidden overflow-x-scroll scroll-smooth no-scrollbar -mt-4 w-[22rem]">
          <div className="flex gap-4">
            {pendingRequest.map((i) => {
              return (
                <FriendsCard
                  key={i._id}
                  data={i?.fromUserId}
                  requestId={i._id}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Request;
