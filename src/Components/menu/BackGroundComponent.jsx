import React from "react";
import "./menu.css"

function BackgroundComponent({ imageUrl, title }) {
  return (
<div
  className="background"
  style={{
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "1rem",
  }}
>
  <h3>{title}</h3>
</div>

  );
}

export default BackgroundComponent;
