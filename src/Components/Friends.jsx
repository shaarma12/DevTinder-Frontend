import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import ConnectionCard from "./ConnectionCard";
import { useNavigate } from "react-router-dom";

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
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-9xl">🥺</p>
        <h1 className="mt-7 text-4xl font-semibold mb-4">No Connection Yet</h1>
        <h1 className="text-wrap w-48 text-2xl ml-4">
          Start connecting with people now!
        </h1>
        <button
          className="btn btn-primary mt-12 w-44 text-lg rounded-full"
          onClick={() => navigate("/")}
        >
          Find Friends
        </button>
      </div>
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
