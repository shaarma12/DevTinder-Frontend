import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import ConnectionCard from "./ConnectionCard";
import NoDataCard from "./NoDataCard";
import { useDispatch } from "react-redux";
import { addStatus } from "../utils/requestStatusSlice";
import FriendsCard from "./FriendsCard";

const Friends = () => {
  const [connection, setConnection] = useState([]);
  const dispatch = useDispatch();
  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      setConnection(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getConnections();
    dispatch(addStatus(true));

    return () => {
      dispatch(addStatus(false));
    };
  }, [dispatch]);

  if (connection && connection.length === 0) {
    return (
      <NoDataCard
        handleData={{
          upperPara: "No Connection Yet",
          lowerPara: "Start connecting with people now!",
          btn: "Find Friends",
        }}
      />
    );
  }
  return (
    connection && (
      <div className="mt-24 flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold xl:mb-4 lg:mb-4 md:mb-4 xl:block lg:block md:block hidden">
          Connections
        </h1>
        <div className="xl:block lg:block md:block hidden overflow-hidden overflow-y-scroll scroll-smooth xl:h-[27rem] lg:h-[22rem] md:h-[23rem] h-[50rem] no-scrollbar">
          <div className="flex flex-col gap-4">
            {connection.map((i) => {
              return <ConnectionCard key={i._id} data={i} />;
            })}
          </div>
        </div>
        <div className="xl:hidden lg:hidden md:hidden block overflow-hidden overflow-x-scroll scroll-smooth no-scrollbar -mt-4 w-[22rem]">
          <div className="flex gap-4">
            {connection.map((i) => {
              return <FriendsCard key={i._id} data={i} />;
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Friends;
