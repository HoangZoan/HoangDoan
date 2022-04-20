import morningImg from "../../assets/images/morning.png";
import noonImg from "../../assets/images/noon.png";
import afternoonImg from "../../assets/images/afternoon.png";
import nightImg from "../../assets/images/night.png";

import "./index.css";

function DaylightIcon({ hour }) {
  let imgSrc, daytime;

  if (hour >= 4 && hour < 10) {
    imgSrc = morningImg;
    daytime = "Buổi sáng";
  } else if (hour >= 10 && hour < 14) {
    imgSrc = noonImg;
    daytime = "Buổi Trưa";
  } else if (hour >= 14 && hour < 16) {
    imgSrc = afternoonImg;
    daytime = "Buổi chiều";
  } else {
    imgSrc = nightImg;
    daytime = "Buổi tối";
  }

  return (
    <div className="daytime-box">
      <img src={imgSrc} alt="Daylight image" />
      <div className="daytime-text">{daytime}</div>
    </div>
  );
}

const containerVariants = {
  hidden: {
    x: "50",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-50",
    transition: { ease: "easeInOut" },
  },
};

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

function DaylightDisplay({ hour, date }) {
  return (
    <div className="daylight-display">
      <div className="date-text">
        {date.toLocaleString("vi-VI", dateOptions)}
      </div>
      <DaylightIcon
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        hour={hour}
      />
    </div>
  );
}

export default DaylightDisplay;
