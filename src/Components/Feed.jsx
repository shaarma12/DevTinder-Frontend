import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import NoDataCard from "./NoDataCard";

const Feed = () => {
  const feedData = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      if (feedData) return;
      const feedRes = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(feedRes?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (feedData && feedData.length <= 0) {
    return (
      <NoDataCard
        handleData={{
          upperPara: "You're all caught up!",
          lowerPara: "Check back later for new updates.",
        }}
      />
    );
  }

  return (
    feedData && (
      <div className="flex justify-center">
        <UserCard data={feedData[0]} />
      </div>
    )
  );
};

export default Feed;
