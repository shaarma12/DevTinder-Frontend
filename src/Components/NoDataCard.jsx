import React from "react";

const NoDataCard = ({ handleData }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-9xl">🥺</p>
      <h1 className="mt-7 text-4xl font-semibold mb-4">
        {handleData?.upperPara}
      </h1>
      {handleData?.lowerPara && (
        <h1 className="text-wrap text-xl ml-4">{handleData?.lowerPara}</h1>
      )}
      {handleData?.btn && (
        <button
          className="btn btn-primary mt-12 w-44 text-lg rounded-full"
          onClick={() => navigate("/")}
        >
          {handleData?.btn}
        </button>
      )}
    </div>
  );
};

export default NoDataCard;
