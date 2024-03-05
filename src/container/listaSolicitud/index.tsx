import React, { useEffect, useState } from "react";
import { ListaSolicitudesV } from "../../components/listaSolicitud";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ListaSolicitudesC = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const etapaId = async () => {
      const resp = await axios.get(`http://localhost:3000/etapa/${id}`);
      setData(resp.data);
    };
    etapaId();
  }, [id]);
  return <ListaSolicitudesV data={data} />;
};
