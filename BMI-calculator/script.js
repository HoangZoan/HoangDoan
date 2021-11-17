const formEl = document.querySelector(".form");
const heightInputEl = document.getElementById("height");
const weightInputEl = document.getElementById("weight");
const resultContainerEl = document.querySelector(".result-container");
const resultScoreEl = document.querySelector(".result-score span");
const resultStattusEl = document.querySelector(".result-status");
const adviceContentEl = document.querySelector(".advice-content");

const RESULTS_DATA = [
  {
    id: "under-weight",
    name: "Thiếu cân",
    adviceList: [
      "Đặt mục tiêu rõ ràng và kế hoạch tăng cân chi tiết. Tốc độ tăng 0.5 kg/tuần là hợp lý",
      "Tăng lượng calorie trong bữa ăn hàng ngày. Bạn cần tiêu tụ 3500 calorie/tuần nhiều hơn so với lượng calorie đốt cháy, đồng nghĩa 500 calorie/ngày cộng vào lượng calorie tiêu chuẩn",
      "Một số thực phẩm giàu tinh bột/đạm cần bổ sung: cơm, sữa, trái cây, rau củ, hạt, đậu, thịt nạc và cá...",
    ],
  },
  {
    id: "normal",
    name: "Bình thường",
    adviceList: [
      "Chúc mừng bạn đã có cân nặng nằm trong khoảng cân đối! Bạn nên tiếp tục duy trì những thói quen ăn uống giàu chất dinh dưỡng, tập thể dục thể thao điều độ, cai thuốc lá nếu bạn đang hút thuốc lá, cai hoặc giảm rượu bia nếu bạn uống rượu bia thường xuyên",
    ],
  },
  {
    id: "over-weight",
    name: "Thừa cân",
    adviceList: [
      "Lập mục tiêu và phương án giảm cân rõ ràng. Giảm khoảng 0.5 kg/tuần là hợp lý",
      "Giảm lượng calorie tiêu thụ hàng ngày. Một chế độ dinh dưỡng giảm khoảng 500 - 1000 kcal/ngày là hợp lý",
      "Một số thực phẩm giúp giảm cân: cà phê ít đường/sữa, trà xanh, cam đắng, bưởi, phúc bồn tử/mâm xôi...",
    ],
  },
  {
    id: "obese",
    name: "Béo phì",
    adviceList: [
      "Lập mục tiêu và phương án rõ ràng. Giảm 10% cân nặng khởi điểm và giảm khoảng 0.5 - 0.9kg/tuần là hợp lý",
      "Giảm lượng calorie tiêu thụ hàng ngày. Một chế độ dinh dưỡng giảm calorie giảm 500 - 1000 kcal/ngày là hợp lý",
      "Tăng cường hoạt động thể chất 30 - 45 phút từ 3 - 5 ngày trong tuần",
    ],
  },
];

const calculateBMI = (height, weight) => {
  const heightInMeter = height / 100;
  return +(weight / (heightInMeter * heightInMeter)).toFixed(1);
};

const renderAdvice = (advice) => {
  const markup = advice
    .map((content) => {
      return `
        <li>
            <span>- ${content}</span>
        </li>
      `;
    })
    .join("\n");

  adviceContentEl.innerHTML = markup;
};

const renderResults = (score) => {
  let status;

  if (score < 18.5) status = "under-weight";
  if (score >= 18.5) status = "normal";
  if (score >= 23) status = "over-weight";
  if (score >= 25) status = "obese";

  const {
    id,
    name: stateLevel,
    adviceList,
  } = RESULTS_DATA.find((result) => result.id === status);

  resultScoreEl.textContent = score;
  resultStattusEl.textContent = stateLevel;
  renderAdvice(adviceList);
};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const { heightValue, weightValue } = Object.fromEntries(formData);
  const bmiScore = calculateBMI(heightValue, weightValue);

  renderResults(bmiScore);
  resultContainerEl.classList.remove("hidden");
});
