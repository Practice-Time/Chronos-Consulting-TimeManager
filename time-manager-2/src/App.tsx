import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Consultant from "./Pages/Consultant";
import Manager from "./Pages/Manager";
import TestPage from "./Pages/TestPage";
import UserLogin from "./Pages/UserLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/Consultant" element={<Consultant />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/UserLogin" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
