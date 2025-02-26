import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addStatus } from "../utils/requestStatusSlice";
import ConnectionCard from "./ConnectionCard";
import NoDataCard from "./NoDataCard";

const Request = () => {
  const dispatch = useDispatch();
  const [pendingRequest, setPendingRequest] = useState([]);

  const getPendingRequests = async () => {
    const pendingRequestRespone = await axios.get(BASE_URL + "/user/request", {
      withCredentials: true,
    });
    setPendingRequest(pendingRequestRespone?.data.data);
    console.log(pendingRequestRespone);
  };

  useEffect(() => {
    getPendingRequests();
    dispatch(addStatus(true));

    return () => {
      dispatch(addStatus(false));
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
          return <ConnectionCard key={i._id} data={i?.fromUserId} />;
        })}
      </div>
    )
  );
};

export default Request;
