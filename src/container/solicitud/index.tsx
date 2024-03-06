import React, { useEffect, useState } from "react";
import { SolicitudV } from "../../components/solicitud";
import axios from "axios";

export const SolicitudC = () => {
  const [dataTipoEtapa, setDataTipoEtapa] = useState([]);
  const [values, setValues] = useState({});
  const [valuesSelect, setValuesSelect] = useState<{ tipoSolicitud: string }>();
  useEffect(() => {
    const TipoEstado = async () => {
      try {
        const resp = await axios.get("https://ejemploetapa-production.up.railway.app/tipoSolicitud");
        console.log(resp)
        setDataTipoEtapa(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    TipoEstado();
  }, []);

  const onChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeRegisterSelect = (_: any, newValue: any) => {
    setValuesSelect(newValue);
  };
  const onSubmitRegister = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    await axios.post("https://ejemploetapa-production.up.railway.app/application", {
      ...values,
      tipoSolicitud: valuesSelect?.tipoSolicitud,
    });
  };
  return (
    <SolicitudV
      dataTipoEtapa={dataTipoEtapa}
      onChangeRegister={onChangeRegister}
      onChangeRegisterSelect={onChangeRegisterSelect}
      onSubmitRegister={onSubmitRegister}
    />
  );
};
