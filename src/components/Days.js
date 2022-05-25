import React from "react";

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
    <div>
      <h3>{days[day - 1]}</h3>
      <h4>{date}</h4>
    </div>
  );
};

export default Days;
