import React from "react";
import moment from "moment";

const Summary = ({ monthSummaryFromApi }) => {
  const currentDate = new Date();
  const actualMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const actualYear = currentDate.getFullYear();
  // const actualMonth = "04";
  // console.log(actualMonth);
  console.log(monthSummaryFromApi);

  const monthHoursArr = [];
  if (monthSummaryFromApi) {
    const foundFullMonthDates = monthSummaryFromApi.forEach(
      (singleData, index) => {
        if (index >= 1) {
          if (singleData.date.slice(3) === `${actualMonth}.${actualYear}`) {
            monthHoursArr.push(moment.duration(singleData.time).asMinutes());
          }
        }
      }
    );
  }
  console.log(monthHoursArr);

  const monthOverall = monthHoursArr.reduce((prev, el) => {
    return prev + el;
  }, 0);

  let minutes = monthOverall % 60;
  let hours = (monthOverall - minutes) / 60;

  return (
    <div>
      <div>
        <h3>Suma godzin w miesiącu:</h3>
        <span>{hours + ":" + ("0" + minutes).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Summary;
