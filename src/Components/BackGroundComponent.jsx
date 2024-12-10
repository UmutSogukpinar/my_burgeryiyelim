import React from "react";

function BackgroundComponent({ imageUrl, title }) {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default BackgroundComponent;
