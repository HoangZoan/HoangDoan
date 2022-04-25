import morningImg from "../../assets/images/morning.png";
import noonImg from "../../assets/images/noon.png";
import afternoonImg from "../../assets/images/afternoon.png";
import nightImg from "../../assets/images/night.png";

import "./index.css";
import React, { useEffect, useState } from "react";

const DaylightIcon = React.memo(({ hour }) => {
  const [daytime, setDaytime] = useState("");
  const [imgSrc, setImgSrc] = useState(null);
  const [classes, setClasses] = useState("daytime-box");

  useEffect(() => {
    setClasses("daytime-box animate-in");

    setTimeout(() => {
      setClasses("daytime-box");
    }, 600);
  }, [imgSrc]);

  useEffect(() => {
    if (hour >= 4 && hour < 10) {
      setImgSrc(morningImg);
      setDaytime("Buổi sáng");
    } else if (hour >= 10 && hour < 14) {
      setImgSrc(noonImg);
      setDaytime("Buổi Trưa");
    } else if (hour >= 14 && hour < 16) {
      setImgSrc(afternoonImg);
      setDaytime("Buổi chiều");
    } else {
      setImgSrc(nightImg);
      setDaytime("Buổi tối");
    }
  }, [hour]);

  return (
    <div className={classes}>
      <img src={imgSrc} alt="Daylight image" />
      <div className="daytime-text">{daytime}</div>
    </div>
  );
});

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

function DaylightDisplay({ hour, date, day }) {
  const [dateTextClasses, setDateTextClasses] = useState("date-text");
  useEffect(() => {
    setDateTextClasses("date-text animate-in");

    setTimeout(() => {
      setDateTextClasses("date-text");
    }, 600);
  }, [day]);

  return (
    <div className="daylight-display">
      <div className={dateTextClasses}>
        {date.toLocaleString("vi-VI", dateOptions)}
      </div>
      <DaylightIcon hour={hour} />
    </div>
  );
}

export default DaylightDisplay;
