import React, { useState, useEffect } from "react";
import Hours from "./Hours";
import Summary from "./Summary";
import History from "./History";
import moment from "moment";
import { days } from "./Days";
import { client } from "../Client";

const contentfulmanage = require("contentful-management");

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
  // const [monthSummary, setMonthSummary] = useState([{}]);
  const [monthSummaryFromApi, setMonthSummaryFromApi] = useState();
  const [monthSummaryToApi, setMonthSummaryToApi] = useState();
  const [flag, setFlag] = useState(false);
  const currentDate = new Date();

  const showDay = (day) => {
    const actualDay = currentDate.getDay(date);
    return days[actualDay - 1];
  };

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

  let minutes = Number(timeData) % 60;
  let hours = (Number(timeData) - minutes) / 60;

  useEffect(() => {
    getData();

    if (monthSummaryFromApi) {
      setMonthSummaryToApi([
        ...monthSummaryFromApi,
        // ...monthSummary,

        {
          date: date,
          day: `${showDay(date)}`,
          time: dayOverall,
          start: `${workStartHours.starthours}:${workStartMinutes.startminutes}`,
          finish: `${workFinishHours.finishhours}:${workFinishMinutes.finishminutes}`,
        },
      ]);
    }

    setDayOverall(hours + ":" + ("0" + minutes).slice(-2));
  }, [date, dayOverall, hours, minutes]);

  ///// GET DATA FROM API////
  const getData = () => {
    client
      .getEntries({
        content_type: "workTimeApp",
      })
      .then((data) => {
        console.log("data", data.items[0].fields.monthSum);
        setMonthSummaryFromApi(data.items[0].fields.monthSum);
      });
  };

  //////// SAVE DATA FROM INPUTS///////
  const saveWorkTimeOnClick = () => {
    if (monthSummaryToApi) {
      (async () => {
        let env = await Connnect();
        await UpdateData(env, "2dBINK71hqO88AAecFFi6n");
      })();

      setTimeout(() => {
        getData();
        console.log(monthSummaryFromApi);
      }, 2000);
    }
  };

  ///// ADD NEW DATA TO API
  async function Connnect() {
    let client = contentfulmanage.createClient({
      accessToken: "CFPAT-Ysf4XBd_3EXIrJCAJfR5oS4mGQjbw1jYAaYTytNyz54",
    });
    let space = await client.getSpace("q3smxmystx36");
    return await space.getEnvironment("master");
  }

  async function UpdateData(env, apiID) {
    let dataArr = await env.getEntry(apiID);
    console.log(dataArr.fields.monthSum);
    console.log(monthSummaryToApi);
    dataArr.fields.monthSum["en-US"] = monthSummaryToApi;
    await dataArr.update();
    dataArr = await env.getEntry(apiID);
    await dataArr.publish();
  }

  /////DELETE RECORDS FROM HISTORY///////
  const deleteLastRecordOnClick = () => {
    setFlag(!flag);
  };
  const confrimDeleteLastRecordOnClick = () => {
    if (monthSummaryFromApi.length >= 1) {
      const temp = [...monthSummaryFromApi];
      temp.splice(-1, 1);
      setMonthSummaryFromApi(temp);
      setMonthSummaryToApi(temp);
      (async () => {
        let env = await Connnect();
        await UpdateData(env, "2dBINK71hqO88AAecFFi6n");
      })();
    }

    setFlag(!flag);
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

      <Summary monthSummaryFromApi={monthSummaryFromApi} />
      <div>
        <h2>Historia</h2>
        <button onClick={deleteLastRecordOnClick}>
          Usuń ostatni wpis z historii
        </button>
        {flag ? (
          <div>
            <p>Na pewno chcesz usunąć ostatni wpis? </p>
            <button onClick={confrimDeleteLastRecordOnClick}>TAK</button>
            <button onClick={() => setFlag(!flag)}>NIE</button>
          </div>
        ) : (
          ""
        )}
        <History monthSummaryFromApi={monthSummaryFromApi} />
      </div>
    </div>
  );
};

export default WorkTime;
