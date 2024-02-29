import React, { useEffect, useState } from "react";
// import PageFormularioV from "../../components/formulario";
import axios from "axios";
import { PageFormularioV } from "../../components/formulario";

interface TabData {
    eNombre: string;
    // priority: number;
    // etapaId: string;
    // Agregar otras propiedades si son relevantes para tus datos
}

export const PageFormularioC = () => {
    const [data, setData] = useState<TabData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://ejemploetapa-production.up.railway.app/estado"
                );
                console.log(response, "🐻‍❄️🐻‍❄️");
                setData(response.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);
    return <PageFormularioV data={data} />;
};
