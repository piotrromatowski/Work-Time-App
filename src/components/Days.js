import React from "react";
import "../styles/days.css";

export const days = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

const Days = () => {
  const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  const date = current.toLocaleDateString();
  const day = current.getDay();

  return (
    <div className="days__container">
      <h2>Dziś jest: </h2>
      <h2>{days[day - 1]}</h2>
      <h2>{date}</h2>
    </div>
  );
};

export default Days;
