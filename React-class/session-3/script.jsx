// Viết component tắt bật đèn bằng class
///////////////////////////////////////

// class App extends React.Component {
//   state = {
//     isOn: false,
//   };

//   constructor() {
//     super();

//     // Tắt bật đèn lặp đi lặp lại sau mỗi 3s
//     // setInterval(() => {
//     //   this.setState({
//     //     isOn: !this.state.isOn,
//     //   });
//     // }, 3000);
//   }

//   buttonClickHandler() {
//     this.setState({
//       isOn: !this.state.isOn,
//     });
//   }

//   render() {
//     const roomClasses = this.state.isOn ? "room light" : "room dark";
//     const bulbIcon = this.state.isOn ? (
//       <i className="bi bi-lightbulb-fill"></i>
//     ) : (
//       <i className="bi bi-lightbulb"></i>
//     );

//     return (
//       <div className="app">
//         <div className={roomClasses}>
//           {bulbIcon}

//           <button onClick={this.buttonClickHandler.bind(this)}>
//             Turn {this.state.isOn ? "off" : "on"}
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// Giống như trên nhưng viết bằng function component
///////////////////////////////////////

// function Bulb({ isOn }) {
//   return isOn ? (
//     <i className="bi bi-lightbulb-fill"></i>
//   ) : (
//     <i className="bi bi-lightbulb"></i>
//   );
// }

// function Button({ isOn, onClick }) {
//   const label = isOn ? "Turn off" : "Turn on";

//   return <button onClick={onClick}>{label}</button>;
// }

// function App() {
//   const [isOn, setIsOn] = React.useState(false);
//   const roomClasses = isOn ? "room light" : "room dark";

//   const handleClick = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div className="app">
//       <div className={roomClasses}>
//         <Bulb isOn={isOn} />

//         <Button isOn={isOn} onClick={handleClick} />
//       </div>
//     </div>
//   );
// }

// function Controllers({ onReset, onIncrease, onDecrease }) {
//   return (
//     <div className="controllers-group">
//       <button onClick={onDecrease}>-</button>
//       <button onClick={onReset}>Reset</button>
//       <button onClick={onIncrease}>+</button>
//     </div>
//   );
// }

// function App() {
//   const [counter, setCounter] = React.useState(0);

//   function resetCounter() {
//     setCounter(0);
//   }

//   function increaseCounter() {
//     setCounter(counter + 1);
//   }

//   function decreaseCounter() {
//     setCounter(counter - 1);
//   }

//   return (
//     <div className="counter-machine">
//       <div className="display">{counter}</div>

//       <Controllers
//         onDecrease={decreaseCounter}
//         onIncrease={increaseCounter}
//         onReset={resetCounter}
//       />
//     </div>
//   );
// }

// Viết đồng hồ bấm giờ
///////////////////////////////////////
const Time = ({ value }) => {
  const { minutes, seconds, milliseconds } = value;
  return (
    <div>
      {String(minutes).padStart(2, "0")} - {String(seconds).padStart(2, "0")} -{" "}
      {String(milliseconds).padStart(2, "0")}
    </div>
  );
};

const Button = ({ isPlaying, onClick }) => {
  const label = isPlaying ? "Pause" : "Play";

  return <button onClick={onClick}>{label}</button>;
};

const App = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [time, setTime] = React.useState({
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  setTimeout(() => {
    if (!isPlaying) return;

    let milliseconds = time.milliseconds + 1;
    let seconds = time.seconds;
    let minutes = time.minutes;

    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds += 1;
    }

    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }

    setTime({ minutes, seconds, milliseconds });
  }, 10);

  function handleClickButton() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="clock">
      <Time value={time} />

      <Button isPlaying={isPlaying} onClick={handleClickButton} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
