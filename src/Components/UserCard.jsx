import React from "react";

const UserCard = ({ data }) => {
  return (
    <div className="card bg-base-200 w-96 shadow-sm flex mt-14 md:mt-8 lg:mt-9 xl:mt-24">
      <figure>
        <img src={data?.photoURL} alt="userImg" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.firstName + " " + data?.lastName}</h2>
        <div className="flex justify-evenly w-44">
          {data?.age && <p>{data?.age} Years old</p>}
          {data?.age && data?.gender && (
            <p className="text-4xl -mt-[1.35rem]">.</p>
          )}
          {data?.gender && <p className="">{data?.gender}</p>}
        </div>
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
