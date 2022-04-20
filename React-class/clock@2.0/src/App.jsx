import { useEffect, useState } from "react";
import {
  getClockTimeData,
  getPointersRotateDegree,
  fetchTimeZone,
} from "./utils/helpers";
import ControllerDisplay from "./components/ControllerDisplay";
import DaylightDisplay from "./components/DaylightDisplay";
import Clock from "./components/Clock";
import Pointer from "./components/Pointer";
import ButtonsGroup from "./components/ButtonsGroup";
import Button from "./components/Button";

import "./App.css";

const countriesData = [
  { name: "Hà Nội", timeZone: "Asia/Ho_Chi_Minh" },
  { name: "Tokyo", timeZone: "Asia/Tokyo" },
  { name: "London", timeZone: "Europe/London" },
  { name: "New York", timeZone: "America/New_York" },
];

const initialData = {
  timezone: countriesData[0].timeZone,
  timeOffset: "+07:00",
};

function App() {
  const [dateTime, setDateTime] = useState(
    getClockTimeData(initialData.timeOffset)
  );
  const [timezone, setTimezone] = useState(initialData.timezone);
  const [offset, setOffset] = useState(initialData.timeOffset);

  useEffect(() => {
    fetchTimeZone(timezone).then((data) => setOffset(data.utc_offset));
  }, [timezone]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(getClockTimeData(offset));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [offset]);

  const { secondRotation, minuteRotation, hourRotation } =
    getPointersRotateDegree(dateTime);

  function handleButtonClick(tzone) {
    setTimezone(tzone);
  }

  return (
    <div className="app">
      <ControllerDisplay>
        <DaylightDisplay hour={dateTime.hours} date={dateTime.date} />

        <ButtonsGroup>
          {countriesData.map((data) => (
            <Button
              key={data.name}
              item={data}
              onButtonClick={handleButtonClick}
              currentTimezone={timezone}
            />
          ))}
        </ButtonsGroup>
      </ControllerDisplay>

      <Clock>
        <Pointer variant="second" rotate={secondRotation} />
        <Pointer variant="minute" rotate={minuteRotation} />
        <Pointer variant="hour" rotate={hourRotation} />
      </Clock>
    </div>
  );
}

export default App;
