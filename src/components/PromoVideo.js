import React from "react";
// import promoSlika from "../img/promo-slika.jpg";

const videoUrl = require("../img/promo-video.mp4");
const videoStyle = {
  display: "block",
  // backgroundImage: "url(../img/promo-slika.jpg)",
  // backgroundSize: "cover"
};

export default ({ data }) => {
  return (
    <div
      className="mt5 bg-near-black"
    >
      <video
        // poster={promoSlika}
        style={videoStyle}
        className="h-100 w-100 lh-0"
        id="bgvid"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};
