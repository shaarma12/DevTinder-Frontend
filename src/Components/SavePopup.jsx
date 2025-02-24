import React from "react";

const SavePopup = ({ message }) => {
  console.log("From Toast");
  return (
    <div className="toast toast-top toast-center fixed top-0 left-1/2 z-50">
      <div className="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default SavePopup;
