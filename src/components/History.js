import React from "react";

const History = ({ monthSummaryFromApi }) => {
  const sortedByDateMonthSummaryFromApi = [];

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
    console.log(sortedByDateMonthSummaryFromApi);
    sortedByDateMonthSummaryFromApi.sort((a, b) => b.id - a.id);
    console.log(sortedByDateMonthSummaryFromApi);
  }

  return (
    <div>
      <div>
        {sortedByDateMonthSummaryFromApi
          ? sortedByDateMonthSummaryFromApi.map((history, index) => {
              return (
                <div key={index}>
                  <h3>{history.date}</h3>
                  <h4>{history.day}</h4>
                  {history.start ? <p>Rozpoczęcie: {history.start}</p> : ""}
                  {history.finish ? <p>Zakończenie: {history.finish}</p> : ""}
                  {history.time ? <p>Liczba godzin: {history.time}</p> : ""}
                </div>
              );
            })
          : ""}
      </div>
      <div className="note">
        <button>Dodaj notatkę</button>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Zapisz</button>
        </div>
      </div>
    </div>
  );
};

export default History;
