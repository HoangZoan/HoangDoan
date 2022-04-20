function getDifferenctTimeAmount(timeOffset) {
  const [hour, minute] = timeOffset.split(":");

  const isPositive = hour.charAt(0) === "+";

  const timeAmount = Number(hour.slice(1)) * 3600 + Number(minute) * 60;

  return isPositive ? timeAmount : -timeAmount;
}

export function getClockTimeData(timeOffset) {
  const offset = getDifferenctTimeAmount(timeOffset) - 7 * 3600;

  const now = new Date(Date.now() + offset * 1000);
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  return { seconds, minutes, hours };
}

export function getPointersRotateDegree(dateTime) {
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

export async function fetchTimeZone(timezone) {
  try {
    const response = await fetch(
      "https://worldtimeapi.org/api/timezone/" + timezone
    );
    if (!response.ok)
      throw new Error("Cannot connect to the server. Please try again!");

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
