import React, { useEffect, useState } from "react";

const data = [{ name: "Việt Nam", timeZone: "Asia/Ho_Chi_Minh" }];

function Component() {
  const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>
        Current Time:{" "}
        {time.toLocaleString("vi-VI", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: timeZone,
        })}
      </h2>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
