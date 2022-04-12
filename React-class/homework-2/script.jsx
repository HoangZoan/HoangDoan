// Hàm trả về giá một object có giá trị là giây, phút, giờ thực tế lấy ra từ hàm Date có sẵn của JS
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
  // --> Bằng giá trị góc của kim giây quay được theo thời gian truyền vào ('second')
  // Ví dụ: Kim giây ở vị trí giây thứ 10, secondDegreeAfterSecond = 60deg.
  // Kim giây ở vị trí giây thứ 15, secondDegreeAfterSecond = 90deg

  const minuteDegreeAfterSecond =
    (+minutes % 60) * 6 + secondDegreeAfterSecond / 60;
  // --> Bằng giá trị góc của kim giây quay được theo thời gian truyền vào (tính cả theo 'second' và 'minute')
  // Trong đó:
  // * (+minutes % 60) * 6: Trả về góc quay hiện tại của kim phút theo giá trị 'minute' nhận được
  // * secondDegreeAfterSecond / 60: Góc mà kim phút quay thêm được tính theo từng giây

  const secondRotation = `${secondDegreeAfterSecond}deg`;
  const minuteRotation = `${minuteDegreeAfterSecond}deg`;

  const hourRotation = `${
    (+hours % 12) * 30 + minuteDegreeAfterSecond / 12
  }deg`;
  // Bằng giá trị góc của kim giây quay được theo thời gian truyền vào (tính cả theo 'hour' và 'minute')
  // Trong đó:
  // * (+hours % 12) * 30: Trả về góc quay hiện tại của kim giờ theo giá trị 'hour' nhận được
  // * minuteDegreeAfterSecond / 12: Góc mà kim giờ quay thêm được tính theo từng phút

  return { secondRotation, minuteRotation, hourRotation };
}

// Hàm component để render ra các kim, nhận 2 props truyền vào để tạo style CSS:
// variant: 'second'|'minute'|'hour'
// rotate: góc quay (0deg - 360deg)
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

  // Sau mỗi 1000ms (1 giây) thì thiết lập giá trị của 'dateTime' mới qua
  // việc gọi hàm 'setDateTime' và giá trị thiết lập là giá trị trả về của hàm 'getClockTimeData'
  // (Như giải thích ở trên, hàm này mỗi khi gọi sẽ trả về giá trị là giây, phút, giờ thực tế tại thời điểm gọi hàm)
  setTimeout(() => {
    setDateTime(getClockTimeData());
  }, 1000);

  // Truyền giá trị 'dateTime' (giờ, phút, giây thực tế) khi render vào hàm 'getPointersRotateDegree' và
  // nhận về giá trị là các góc quay tại thời gian tương ứng sau khi được tính toán
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
