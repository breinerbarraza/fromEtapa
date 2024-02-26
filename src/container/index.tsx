// import React from "react";s

import axios from "axios";
import { PageSolicitudV } from "../components";

export const PageSolicitudC = () => {
  const data = axios
    .get("https://ejemploetapa-production.up.railway.app/etapas")
    .then((asd) => {
      console.log(asd);
    });
  console.log(data);
  return <PageSolicitudV />;
};
