import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApiResponse, getConsultantSchedule } from "./Services/Api";

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

    return await getConsultantSchedule()
      .then((response) => setData(response.data))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <p>Loading</p>}
        {!loading && <p>{JSON.stringify(data)}</p>}
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
}

export default App;
