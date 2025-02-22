import React from "react";
import { useSelector } from "react-redux";

const UserCard = ({ data }) => {
  const userName = useSelector((store) => store?.user);
  return (
    <div className="card bg-base-200 w-96 shadow-sm flex mt-14 md:mt-8 lg:mt-9 xl:mt-24">
      <figure>
        <img src={data?.photoURL} alt="userImg" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.firstName + " " + data?.lastName}</h2>
        <div className="flex">
          {data?.age && <p>{data?.age} Years old</p>}
          {data?.age && data?.gender && (
            <p className="text-4xl -mt-[1.3rem] -ml-40">.</p>
          )}
          {data?.gender && <p className="-ml-40">{data?.gender}</p>}
        </div>
        <p>{data?.about}</p>
        {!(data?.firstName === userName.firstName) && (
          <div className="card-actions justify-center gap-14 mt-4">
            <button className="btn btn-error btn-soft">Ignored</button>
            <button className="btn btn-primary btn-soft">Interested</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
