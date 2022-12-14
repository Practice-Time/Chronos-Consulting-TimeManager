import logo from "./logo.svg";
import "./App.css";
import { getConsultantSchedule } from "./Services/Api";

const App = async () => {
  const apiResponse = await getConsultantSchedule();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(apiResponse.data)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
