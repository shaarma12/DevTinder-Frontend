import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import ConnectionCard from "./ConnectionCard";
import { useNavigate } from "react-router-dom";
import NoDataCard from "./NoDataCard";

const Friends = () => {
  const [connection, setConnection] = useState([]);
  const navigate = useNavigate();
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
  }, []);
  console.log(connection);

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
      <div className="mt-24 ml-10 flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold mb-4">Connections</h1>
        {connection.map((i) => {
          return <ConnectionCard key={i._id} data={i} />;
        })}
      </div>
    )
  );
};

export default Friends;
