import React from "react";
import "../styles/hours.css";

const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const minutes = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
];

const Hours = ({
  setWorkStartHours,
  setWorkFinishHours,
  setWorkStartMinutes,
  setWorkFinishMinutes,
}) => {
  const onChangeStartHoursHandler = ({ target: { name, value } }) => {
    setWorkStartHours({ [name]: value });
  };
  const onChangeFinishtHoursHandler = ({ target: { name, value } }) => {
    setWorkFinishHours({ [name]: value });
  };
  const onChangeStartMinutesHandler = ({ target: { name, value } }) => {
    setWorkStartMinutes({ [name]: ("0" + value).slice(-2) });
  };
  const onChangeFinishMinutesHandler = ({ target: { name, value } }) => {
    setWorkFinishMinutes({ [name]: ("0" + value).slice(-2) });
  };

  return (
    <div className="hours__container">
      <div className="hours__container-selection">
        <h2 className="hours__container-selection-title">Rozpoczęcie</h2>
        <select
          className="hours__container-selection-select"
          name="starthours"
          onChange={onChangeStartHoursHandler}
        >
          {hours.map((hour, index) => {
            return (
              <option value={Number(hour)} key={index}>
                {hour}
              </option>
            );
          })}
        </select>
        <select
          className="hours__container-selection-select"
          name="startminutes"
          onChange={onChangeStartMinutesHandler}
        >
          {minutes.map((minute, index) => {
            return (
              <option value={Number(minute)} key={index}>
                {minute}
              </option>
            );
          })}
        </select>
      </div>
      <div className="hours__container-selection">
        <h2 className="hours__container-selection-title">Zakończenie</h2>
        <select
          className="hours__container-selection-select"
          name="finishhours"
          onChange={onChangeFinishtHoursHandler}
        >
          {hours.map((hour, index) => {
            return (
              <option
                className="hours__container-selection-select-option"
                value={Number(hour)}
                key={index}
              >
                {hour}
              </option>
            );
          })}
        </select>
        <select
          className="hours__container-selection-select"
          name="finishminutes"
          onChange={onChangeFinishMinutesHandler}
        >
          {minutes.map((minute, index) => {
            return (
              <option
                className="hours__container-selection-select-option"
                value={Number(minute)}
                key={index}
              >
                {minute}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Hours;
