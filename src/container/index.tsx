import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageSolicitudV } from "../components";

export const PageSolicitudC = () => {
    // Define el estado para almacenar los datos
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://ejemploetapa-production.up.railway.app/estado"
                );
                console.log(response, "🐻‍❄️");
                setData(response.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);
    return <PageSolicitudV data={data} />;
};
