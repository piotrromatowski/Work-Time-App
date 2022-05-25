import React from "react";

const History = ({ monthSummary }) => {
  console.log(monthSummary);

  return (
    <div>
      <h2>Historia</h2>
      <div>
        {monthSummary.map((history, index) => {
          return (
            <div key={index}>
              <h3>{history.date}</h3>
              <h4>{history.day}</h4>
              {history.start ? <p>Rozpoczęcie: {history.start}</p> : ""}
              {history.finish ? <p>Zakończenie: {history.finish}</p> : ""}
              {history.time ? <p>Liczba godzin: {history.time}</p> : ""}
            </div>
          );
        })}
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
