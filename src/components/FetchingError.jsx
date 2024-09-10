import React from "react";

const FetchingError = () => {
  return (
    <div className="warning-container">
      <div className="warning-box">
        <p className="warning-text">
          ⚠️ Failed to Load Contents, please try again later...
        </p>
      </div>
    </div>
  );
};

export default FetchingError;
