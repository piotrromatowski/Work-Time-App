import React from "react";
import moment from "moment";
import "../styles/summary.css";

const Summary = ({ monthSummaryFromApi }) => {
  const currentDate = new Date();
  const actualMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const actualYear = currentDate.getFullYear();
  // const actualMonth = "04";
  // console.log(actualMonth);

  const monthHoursArr = [];
  if (monthSummaryFromApi) {
    monthSummaryFromApi.forEach((singleData, index) => {
      if (index >= 1) {
        if (singleData.date.length === 10) {
          if (singleData.date.slice(3) === `${actualMonth}.${actualYear}`) {
            monthHoursArr.push(moment.duration(singleData.time).asMinutes());
          }
        } else {
          if (singleData.date.slice(2) === `${actualMonth}.${actualYear}`) {
            monthHoursArr.push(moment.duration(singleData.time).asMinutes());
          }
        }
      }
    });
  }

  const monthOverall = monthHoursArr.reduce((prev, el) => {
    return prev + el;
  }, 0);

  let minutes = monthOverall % 60;
  let hours = (monthOverall - minutes) / 60;

  return (
    <div className="summary__container">
      <h3 className="summary__container-title">Suma godzin w miesiącu:</h3>
      <span className="summary__container-hours">
        {hours + ":" + ("0" + minutes).slice(-2)}
      </span>
    </div>
  );
};

export default Summary;
