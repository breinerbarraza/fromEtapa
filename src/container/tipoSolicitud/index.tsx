import React, { useEffect, useState } from "react";
import axios from "axios";
import { TipoSolicitudV } from "../../components/tipoSolicitud";

export const TipoSolicitudC = () => {
  const [dataEtapa, setDataEtapa] = useState([]);
  const [dataValues, setDataValues] = useState<any>([
    { id: new Date().getTime() },
  ]);
  const [values, setValues] = useState({});
  useEffect(() => {
    const TipoEstado = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/etapa");
        setDataEtapa(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    TipoEstado();
  }, []);

  const onSubmitRegister = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/tipoSolicitud", {
      ...values,
      solicitudTipoEtapa:dataValues.map((x:any) =>({
        tipoEtapa: x.teId,
        steOrden: x.eOrden,

      })),
    });
  };
  const onHandleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onChangeRegisterSelect = (_: any, newValue: any, i: number) => {
    const nuevasEtapas = [...dataValues];
    nuevasEtapas[i] = {
      ...nuevasEtapas[i],
      teId: newValue?.teId || "",
    };
    setDataValues(nuevasEtapas);
  };
  const onChangeRegister = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const { name, value } = e.target;
    const nuevasEtapas = [...dataValues];
    nuevasEtapas[i] = { ...nuevasEtapas[i], [name]: value };
    setDataValues(nuevasEtapas);
  };
  const addEtapa = () => {
    setDataValues([
      ...dataValues,
      {
        id: new Date().getTime(),
      },
    ]);
  };

  const deleteEtapa = (id: any) => {
    const data = dataValues.filter((x: any) => x.id !== id);
    setDataValues(data);
  };

  return (
    <TipoSolicitudV
      dataEtapa={dataEtapa}
      dataValues={dataValues}
      addEtapa={addEtapa}
      deleteEtapa={deleteEtapa}
      onChangeRegister={onChangeRegister}
      onChangeRegisterSelect={onChangeRegisterSelect}
      onSubmitRegister={onSubmitRegister}
      onHandleName={onHandleName}
    />
  );
};
