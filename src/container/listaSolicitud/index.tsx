import React, { useEffect, useState } from "react";
import { ListaSolicitudesV } from "../../components/listaSolicitud";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ListaSolicitudesC = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [dataList, setDataList] = useState({});
  useEffect(() => {
    const etapaId = async () => {
      const resp = await axios.get(`https://ejemploetapa-production.up.railway.app/etapa/${id}`);
      setData(resp.data);
      const { data } = await axios.get(`https://ejemploetapa-production.up.railway.app/application/${id}`);
      setDataList(data);
    };
    etapaId();
  }, [id]);
  return <ListaSolicitudesV data={data} dataList={dataList} />;
};
