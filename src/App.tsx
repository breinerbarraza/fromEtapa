import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSolicitud from "./page";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={PageSolicitud} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
