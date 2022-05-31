// POBIERANIE Z API
import * as contentful from "contentful"; // POBIERANIE Z API

export const client = contentful.createClient({
  space: "q3smxmystx36",
  accessToken: "x2EM8EvIcE-O3Po6XJ0D0ZwSERNtPz8otFkVlorHH-g",
});

// export const client = contentful.createClient({
//   space: process.env.REACT_APP_SPACE_ID,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN,
// });

/// UPDATE API
///GOOD FUNCTION
const contentfulmanage = require("contentful-management"); /// UPDATE API

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
  dataArr.fields.monthSum["en-US"] = [
    {
      date: "20.04.2022",
      day: "Środa",
      time: "7:20",
      start: "9:02",
      finish: "16:22",
    },
    {
      date: "21.04.2022",
      day: "Czwartek",
      time: "7:20",
      start: "9:02",
      finish: "16:22",
    },
    {
      date: "22.04.2022",
      day: "Piątek",
      time: "7:20",
      start: "9:02",
      finish: "16:22",
    },
  ];
  await dataArr.update();
  dataArr = await env.getEntry(apiID);
  await dataArr.publish();
}

(async () => {
  let env = await Connnect();

  //   await UpdateData(env, "2dBINK71hqO88AAecFFi6n");
})();
