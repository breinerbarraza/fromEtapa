import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSolicitud from "./page/etapa";
import Page from "./page/create";
import PageFormulario from "./page/formulario";
import { SolicitudP } from "./page/solicitud";
import { TipoSolicitudP } from "./page/tipoSolicitud";
import { ListaTramiteP } from "./page/ListaTramite";
import { ListaSolicitudesP } from "./page/listaSolicitud";

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
        <Route path="/listaSolicitudes/:id" Component={ListaSolicitudesP} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
