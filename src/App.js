import "./index.css";

import WorkTime from "./components/WorkTime";
import Days from "./components/Days";

function App() {
  const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  const date = current.toLocaleDateString();
  const day = current.getDay();

  const days = [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
    "Niedziela",
  ];

  return (
    <div className="container">
      <h1>GODZINY PRACY</h1>
      <Days />
      <WorkTime date={date} day={day} days={days} />
    </div>
  );
}

export default App;
