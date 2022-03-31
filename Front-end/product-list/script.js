/* XỬ LÝ SỐ */
////////////////////////////////////

// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
const calcSphereVolume = (radius) => {
  return (4 * Math.PI * radius ** 3) / 3;
};

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
// Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
const sumNumbersBetween = (number1, number2) => {
  if (number1 === number2) return 0;

  const bigNumber = number1 > number2 ? number1 : number2;
  const smallNumber = number1 < number2 ? number1 : number2;

  let result = 0;

  for (let i = smallNumber + 1; i < bigNumber; i++) {
    result += i;
  }

  return result;
};

// Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
const sumAllDivisors = (number) => {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result += i;
    }
  }

  return result;
};

// Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không,
// kết quả trả về true hoặc false.
const validatePrimeNumber = (number) => {
  let checker = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      checker += i;
    }
  }

  return checker <= number + 1;
};

// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng
// tham số truyền vào.
const testString5 = (passedInNumber, integerNumber) => {
  let result = 0;

  for (let i = 1; i <= integerNumber; i++) {
    if (integerNumber % i === 0 && i <= passedInNumber) {
      result += i;
    }
  }

  return result;
};

/* XỬ LÝ CHUỖI */
////////////////////////////////////

// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ.
// Ví dụ: ''HELLO world'' => ''Hello World''.
const capitalizeString = (string) => {
  const stringArr = string.toLowerCase().split(" ");

  return stringArr
    .map((word) => {
      const firstLetter = word.slice(0, 1).toUpperCase();
      const followingLetters = word.slice(1, word.length);

      return firstLetter + followingLetters;
    })
    .join(" ");
};

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case.
// Ví dụ: ''HELLO world'' => ''hello-world''.
const makeSpinalCaseString = (string) => {
  return string.toLowerCase().replaceAll(" ", "-");
};

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
// (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường),
// kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
const validateSymmetricalString = (string) => {
  const newString = string.toLowerCase().replaceAll(" ", "");
  const reverseString = newString.split("").reverse().join("");

  return reverseString === newString;
};

// Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự
// (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không
// (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey''
// và không chứa ''ww''.
const testArray4 = (firstStr, secondStr) => {
  const firstStrArr = firstStr.toLowerCase().split("");
  const secondStrArr = secondStr.toLowerCase().split("");

  const countSpaces = (stringArr) => {
    return stringArr.reduce((sum, newVal) => {
      if (newVal !== " ") return sum;

      return sum + 1;
    }, 0);
  };

  // Trả về 'false' nếu 2 chuỗi không có số dấu cách bằng nhau
  if (countSpaces(firstStrArr) !== countSpaces(secondStrArr)) return false;

  let validation = true;

  for (const letter of firstStrArr) {
    const match = secondStrArr.some((l) => letter === l);

    if (!match) {
      validation = false;
      break;
    }
  }

  return validation;
};

/* XỬ LÝ OBJECT */
////////////////////////////////////

// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
const calcAverageAge = (data) => {
  const ageValuesArray = data.map(({ age }) => age);
  const totalAge = ageValuesArray.reduce((sum, newAge) => sum + newAge, 0);

  return totalAge / data.length;
};

// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
const sortStudentsByOlderAge = (data) => {
  const output = [...data];

  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output.length; j++) {
      if (output[i].age <= output[j].age) {
        continue;
      } else {
        let middle = output[i];
        output[i] = output[j];
        output[j] = middle;
      }
    }
  }

  return output;
};

// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).

const sortStudentsName = (data) => {
  let copyData = [...data];

  const sortedNameValuesArr = copyData.map(({ name }) => name).sort();

  const result = sortedNameValuesArr.map((nameData) => {
    let i;
    const match = copyData.find((item, index) => {
      i = index;
      return item.name === nameData;
    });

    copyData.splice(i, 1);

    return match;
  });

  return result;
};

// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
const sortStudentNameStartsWithLetterH = (data) => {
  return data.filter((item) => item.name.slice(0, 1).toLowerCase() === "h");
};

/* TỔNG HỢP */
////////////////////////////////////

// Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'',
// tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ
// thời điểm t. Ví dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
const test1 = (dateString, x) => {
  if (x > 1000) return "Số x không được lớn hơn 1000";

  const [hour, min, sec] = dateString.split(":");
  const initialDate = new Date(2022, 2, 28, hour, min, sec);

  const targetDate = new Date(initialDate.getTime() + x * 1000);

  const newHour = targetDate.getHours().toString().padStart(2, 0);
  const newMin = targetDate.getMinutes().toString().padStart(2, 0);
  const newSec = targetDate.getSeconds().toString().padStart(2, 0);

  return `${newHour}:${newMin}:${newSec}`;
};

// Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét,
// ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng.
// Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên
// (x > 0, y > 0).

const test2 = (x, y, h) => {
  let days = 1;
  let climbedLength = x;

  while (climbedLength < h) {
    days++;

    if (climbedLength + x >= h) {
      break;
    }

    climbedLength = climbedLength + x - y;
  }

  return days;
};

// Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho
// ra 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.
const test3 = (number) => {
  let sortedNumberArr = String(number)
    .split("")
    .sort((a, b) => a - b);

  if (sortedNumberArr[0] === "0") {
    const index = sortedNumberArr.findIndex((num) => num !== "0");

    sortedNumberArr[0] = sortedNumberArr[index];
    sortedNumberArr[index] = "0";
  }

  return Number(sortedNumberArr.join(""));
};
