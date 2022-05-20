import React, { useState } from "react";
import Hours from "./Hours";
import Summary from "./Summary";
import History from "./History";
import moment from "moment";

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

  const saveWorkTimeOnClick = () => {
    var minutes = Number(timeData) % 60;

    var hours = (Number(timeData) - minutes) / 60;
    console.log(hours + ":" + minutes);
    setDayOverall(hours + ":" + ("0" + minutes).slice(-2));
    return hours + ":" + minutes;
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

      <Summary dayOverall={dayOverall} date={date} />
      <History
        workStartHours={workStartHours}
        workStartMinutes={workStartMinutes}
        workFinishHours={workFinishHours}
        workFinishMinutes={workFinishMinutes}
        dayOverall={dayOverall}
        date={date}
      />
    </div>
  );
};

export default WorkTime;
