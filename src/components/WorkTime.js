import React, { useState, useEffect } from "react";
import Hours from "./Hours";
import Summary from "./Summary";
import History from "./History";
import moment from "moment";
import { days } from "./Days";

const WorkTime = ({ date }) => {
  const [workStartHours, setWorkStartHours] = useState({ starthours: "" });
  const [workStartMinutes, setWorkStartMinutes] = useState({
    startminutes: "",
  });
  const [workFinishHours, setWorkFinishHours] = useState({ finishhours: "" });
  const [workFinishMinutes, setWorkFinishMinutes] = useState({
    finishminutes: "",
  });

  const [dayOverall, setDayOverall] = useState("");

  const [monthSummary, setMonthSummary] = useState([{}]);

  const currentDate = new Date();
  // const actualMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);

  // const actualYear = currentDate.getFullYear();
  // const actualDay = currentDate.getDay("20.04.2022");

  const showDay = (day) => {
    const actualDay = currentDate.getDay(date);
    return days[actualDay - 1];
  };

  console.log(
    `Start: ${workStartHours.starthours}:${workStartMinutes.startminutes}; Finish ${workFinishHours.finishhours}:${workFinishMinutes.finishminutes}`
  );

  const timeData =
    Number(
      moment
        .duration(
          `${workFinishHours.finishhours}:${workFinishMinutes.finishminutes}`
        )
        .asMinutes()
    ) -
    Number(
      moment
        .duration(
          `${workStartHours.starthours}:${workStartMinutes.startminutes}`
        )
        .asMinutes()
    );
  console.log(timeData);

  let minutes = Number(timeData) % 60;
  let hours = (Number(timeData) - minutes) / 60;

  useEffect(() => {
    setDayOverall(hours + ":" + ("0" + minutes).slice(-2));
    console.log(dayOverall);
  }, [dayOverall, hours, minutes, monthSummary]);

  const saveWorkTimeOnClick = () => {
    console.log(
      "!!!!!!!!!!!!!!",
      monthSummary[monthSummary.length - 1].date,
      date,
      monthSummary[monthSummary.length - 1].time,
      dayOverall
    );
    if (monthSummary[monthSummary.length - 1].time === dayOverall) {
      const temp = [...monthSummary];
      temp.splice(temp[temp.length - 1], 1);
      setMonthSummary(temp);

      // setMonthSummary([
      //   ...monthSummary,
      //   {
      //     date: date,
      //     day: `${showDay(date)}`,
      //     time: dayOverall,
      //     start: `${workStartHours.starthours}:${workStartMinutes.startminutes}`,
      //     finish: `${workFinishHours.finishhours}:${workFinishMinutes.finishminutes}`,
      //   },
      // ]);
    } else {
      setMonthSummary([
        ...monthSummary,
        {
          date: date,
          day: `${showDay(date)}`,
          time: dayOverall,
          start: `${workStartHours.starthours}:${workStartMinutes.startminutes}`,
          finish: `${workFinishHours.finishhours}:${workFinishMinutes.finishminutes}`,
        },
      ]);
    }
    // setMonthSummary([
    //   ...monthSummary,
    //   {
    //     date: date,
    //     day: `${showDay(date)}`,
    //     time: dayOverall,
    //     start: `${workStartHours.starthours}:${workStartMinutes.startminutes}`,
    //     finish: `${workFinishHours.finishhours}:${workFinishMinutes.finishminutes}`,
    //   },
    // ]);
  };

  return (
    <div>
      <div>
        <Hours
          setWorkStartHours={setWorkStartHours}
          setWorkFinishHours={setWorkFinishHours}
          setWorkStartMinutes={setWorkStartMinutes}
          setWorkFinishMinutes={setWorkFinishMinutes}
        />
      </div>
      <h4>
        Czas pracy: <span>{dayOverall}</span>
      </h4>
      <button onClick={saveWorkTimeOnClick}>Zapisz godziny</button>

      <Summary monthSummary={monthSummary} />
      <History monthSummary={monthSummary} />
    </div>
  );
};

export default WorkTime;
