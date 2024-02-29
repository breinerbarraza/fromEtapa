import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSolicitud from "./page";
import Page from "./page/create";
import PageFormulario from "./page/formulario";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={PageSolicitud} />
        <Route path="/kathe" Component={Page} />
        <Route path="/Formulario" Component={PageFormulario} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
