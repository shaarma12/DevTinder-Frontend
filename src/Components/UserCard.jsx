import React from "react";

const UserCard = ({ data }) => {
  return (
    <div className="card bg-base-200 w-96 mb-32 shadow-sm flex mx-auto mt-14 md:mt-8 lg:mt-9 xl:mt-24">
      <figure>
        <img src={data?.photoURL} alt="userImg" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.firstName + " " + data?.lastName}</h2>
        {data?.age && data?.gender && (
          <div className="flex">
            <p>{data?.age} Years old</p>
            <p className="text-4xl -mt-[1.3rem] -ml-40">.</p>
            <p className="-ml-40">{data?.gender}</p>
          </div>
        )}
        <p>{data?.about}</p>
        <div className="card-actions justify-center gap-14 mt-4">
          <button className="btn btn-error btn-soft">Ignored</button>
          <button className="btn btn-primary btn-soft">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
