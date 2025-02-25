import React from "react";

const ConnectionCard = ({ data }) => {
  return (
    <div>
      <div className="card w-[55rem] bg-base-200 card-md shadow-sm">
        <div className="card-body">
          <div className="flex gap-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={data?.photoURL} />
              </div>
            </div>
            <div>
              <h2 className="card-title">
                {data?.firstName + " " + data.lastName}
              </h2>
              <div className="flex justify-evenly w-44 my-1">
                {data?.age && <p>{data?.age} Years old</p>}
                {data?.age && data?.gender && (
                  <p className="text-4xl -mt-[1.35rem]">.</p>
                )}
                {data?.gender && <p>{data?.gender}</p>}
              </div>
              <p>{data?.about}</p>
            </div>
          </div>

          {/* <div className="justify-end card-actions">
            <button className="btn btn-primary">Chat Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
