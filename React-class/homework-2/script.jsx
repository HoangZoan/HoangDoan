function getClockTimeData() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  return { seconds, minutes, hours };
}

function getPointersRotateDegree(dateTime) {
  const { seconds, minutes, hours } = dateTime;

  const secondDegreeAfterSecond = (+seconds % 60) * 6;
  const minuteDegreeAfterSecond =
    (+minutes % 60) * 6 + secondDegreeAfterSecond / 60;
  const secondRotation = `${secondDegreeAfterSecond}deg`;
  const minuteRotation = `${minuteDegreeAfterSecond}deg`;
  const hourRotation = `${
    (+hours % 12) * 30 + minuteDegreeAfterSecond / 12
  }deg`;

  return { secondRotation, minuteRotation, hourRotation };
}

function Pointer({ variant, rotate }) {
  return (
    <div
      className={"pointer " + variant}
      style={{ transform: `translate(-50%, -100%) rotate(${rotate})` }}
    ></div>
  );
}

function App() {
  const [dateTime, setDateTime] = React.useState(getClockTimeData());

  setTimeout(() => {
    setDateTime(getClockTimeData());
  }, 1000);

  const { secondRotation, minuteRotation, hourRotation } =
    getPointersRotateDegree(dateTime);

  return (
    <div className="app">
      <div className="clock">
        <img src="./clock-face.png" alt="Clock" />

        <Pointer variant="second" rotate={secondRotation} />
        <Pointer variant="minute" rotate={minuteRotation} />
        <Pointer variant="hour" rotate={hourRotation} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
