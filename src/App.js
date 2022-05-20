import "./App.css";
import History from "./components/History";
import WorkTime from "./components/WorkTime";

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  const date2 = current.toLocaleDateString();
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
    <div className="App">
      <div>
        <h3>{days[day - 1]}</h3>
        <h4>{date}</h4>
        <WorkTime date={date} />
      </div>
    </div>
  );
}

export default App;
