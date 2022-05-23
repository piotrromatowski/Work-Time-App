import React from "react";

const Summary = ({ dayOverall, date }) => {
  const currentDate = new Date();
  const actualDate = currentDate.toLocaleDateString();
  // console.log(currentDate.getMonth() + 1);

  const actualMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  console.log(actualMonth);
  const actualYear = currentDate.getFullYear();

  const monthSummary = [
    {
      date: "20.04.2022",
      time: dayOverall,
    },
    {
      date: date,
      time: dayOverall,
    },
    {
      date: "25.05.2022",
      time: dayOverall,
    },
    {
      date: "26.05.2022",
      time: dayOverall,
    },
    {
      date: "27.05.2022",
      time: dayOverall,
    },
  ];
  console.log(monthSummary);
  console.log(dayOverall);
  console.log(date);

  const foundFullMonthDates = monthSummary.filter(
    (element) => element.date.slice(3, 10) === `${actualMonth}.${actualYear}`
  );
  console.log(foundFullMonthDates);
  console.log(`${actualMonth}.${actualYear}`);

  // const dateNew = monthSummary.forEach((element) => {
  //   element.slice(3, 10);
  //   console.log(element);
  // });

  return (
    <div>
      <h3>Suma godzin w miesiącu:</h3>
      <span>00:00</span>
    </div>
  );
};

export default Summary;
