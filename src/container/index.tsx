import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageSolicitudV } from "../components";

export const PageSolicitudC = () => {
  // Define el estado para almacenar los datos
  const [data, setData] = useState([]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/etapa");
        setData(response.data);
        const res = await axios.get("http://localhost:3000/application");
        setDataList(res.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  console.log(dataList, "🦜");
  return <PageSolicitudV data={data} dataList={dataList} />;
};
