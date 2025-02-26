import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import ConnectionCard from "./ConnectionCard";
import NoDataCard from "./NoDataCard";
import { addRequest } from "../utils/requestSlice";
import { addBtnStatus } from "../utils/buttonSlice";

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
      <div className="mt-24 ml-10 flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold mb-4">Pending Requests</h1>
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
    )
  );
};

export default Request;
