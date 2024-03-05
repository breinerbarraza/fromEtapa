import React, { useEffect, useState } from "react";
import { ListaTramiteV } from "../../components/ListaTramite";
import axios from "axios";

export const ListaTramiteC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ejemploetapa-production.up.railway.app/tipoSolicitud");
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);
  return <ListaTramiteV data={data} />;
};
