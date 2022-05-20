import React from "react";

const Summary = ({ dayOverall, date }) => {
  const monthSummary = [
    {
      date: date,
      time: dayOverall,
    },
  ];
  console.log(monthSummary);

  return (
    <div>
      <h3>Suma godzin w miesiącu:</h3>
      <span>00:00</span>
    </div>
  );
};

export default Summary;
