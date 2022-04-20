import { useEffect, useState } from "react";
import {
  getClockTimeData,
  getPointersRotateDegree,
  fetchTimeZone,
} from "./utils";
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

const initialData = countriesData[0].timeZone;

function App() {
  const [dateTime, setDateTime] = useState(getClockTimeData("+07:00"));
  const [timezone, setTimezone] = useState(initialData);
  const [offset, setOffset] = useState("+07:00");

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
      <div>
        <DaylightDisplay time={dateTime.hours} />

        <ButtonsGroup>
          {countriesData.map((data) => (
            <Button
              key={data.name}
              item={data}
              onButtonClick={handleButtonClick}
            />
          ))}
        </ButtonsGroup>
      </div>

      <Clock>
        <Pointer variant="second" rotate={secondRotation} />
        <Pointer variant="minute" rotate={minuteRotation} />
        <Pointer variant="hour" rotate={hourRotation} />
      </Clock>
    </div>
  );
}

export default App;
