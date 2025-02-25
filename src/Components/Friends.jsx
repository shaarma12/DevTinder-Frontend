import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import ConnectionCard from "./ConnectionCard";

const Friends = () => {
  const [connection, setConnection] = useState(null);
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

  if (connection && connection.length <= 0) {
    return <h1>No Connection Found</h1>;
  }
  return (
    connection && (
      <div className="mt-24 ml-10 flex flex-col gap-4">
        {connection.map((i) => {
          return <ConnectionCard key={i._id} data={i} />;
        })}
      </div>
    )
  );
};

export default Friends;
