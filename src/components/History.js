import React, { useState } from "react";
import "../styles/history.css";

const History = ({ monthSummaryFromApi }) => {
  const sortedByDateMonthSummaryFromApi = [];
  const [shortList, setShortList] = useState(5);

  if (monthSummaryFromApi) {
    monthSummaryFromApi.map((item, index) => {
      return sortedByDateMonthSummaryFromApi.push({
        id: index,
        date: item.date,
        day: item.day,
        start: item.start,
        finish: item.finish,
        time: item.time,
      });
    });
    // console.log(sortedByDateMonthSummaryFromApi);
    sortedByDateMonthSummaryFromApi.sort((a, b) => b.id - a.id);
    // console.log(sortedByDateMonthSummaryFromApi);
  }

  const shortListMonthSummary = sortedByDateMonthSummaryFromApi.slice(
    0,
    shortList
  );

  return (
    <div className="history__container">
      <div className="history__container-single-day-wrapper">
        {shortListMonthSummary
          ? shortListMonthSummary.map((history, index) => {
              return (
                <div className="history__container-single-day" key={index}>
                  <h3>{history.date}</h3>
                  <h4>{history.day}</h4>
                  {history.start ? <p>Rozpoczęcie: {history.start}</p> : ""}
                  {history.finish ? <p>Zakończenie: {history.finish}</p> : ""}
                  {history.time ? (
                    <p className="history__container-single-day-hours-summary">
                      Liczba godzin: {history.time}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div className="history__container-buttons">
        <button onClick={() => setShortList(shortList + 5)}>
          Pokaż 5 więcej
        </button>
        <button
          onClick={() => (shortList !== 0 ? setShortList(shortList - 5) : "")}
        >
          Pokaż 5 mniej
        </button>
      </div>
    </div>
  );
};

export default History;
