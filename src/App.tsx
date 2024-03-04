import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSolicitud from "./page";
import Page from "./page/create";
import PageFormulario from "./page/formulario";
import { SolicitudP } from "./page/solicitud";
import { TipoSolicitudP } from "./page/tipoSolicitud";
import { ListaTramiteP } from "./page/ListaTramite";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={PageSolicitud} />
        <Route path="/kathe" Component={Page} />
        <Route path="/formulario" Component={PageFormulario} />
        <Route path="/solicitud" Component={SolicitudP} />
        <Route path="/tipoTramite" Component={TipoSolicitudP} />
        <Route path="/tipoTramite/:trId" Component={TipoSolicitudP} />
        <Route path="/listaTramite" Component={ListaTramiteP} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
