import { Route, Routes } from "react-router-dom";

import "./styles/global.scss";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
