import React from "react";

const FriendsCard = ({ data }) => {
  const { firstName, lastName, photoURL, age, gender, about } = data;
  const fullName = firstName + " " + lastName;
  return (
    <div className="card bg-base-200 shadow-sm h-[28rem] w-full">
      <figure>
        <img src={photoURL} alt="userImg" className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {fullName.length > 13 ? fullName.slice(0, 13) + "..." : fullName}
        </h2>
        <div className="flex justify-evenly w-44">
          {age && <p>{age} Years old</p>}
          {age && gender && <p className="text-4xl -mt-[1.35rem]">.</p>}
          {gender && <p className="">{gender}</p>}
        </div>
        <p>{about.length > 100 ? about.slice(0, 100) + "..." : about}</p>
      </div>
    </div>
  );
};

export default FriendsCard;
