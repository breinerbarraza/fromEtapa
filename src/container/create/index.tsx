import React, { useEffect, useState } from "react";

// import BasicTable from "../../components/kathe";
import axios from "axios";
import { BasicTable } from "../../components/kathe";
// import { BasicTable } from "../../components/kathe";

interface TabData {
    eNombre: string;
    ePrioridad: number;
    eId: string;
    // Agregar otras propiedades si son relevantes para tus datos
}

export const PageCreateC = () => {
    const [data, setData] = useState<TabData[]>([]);
    const [creatingRow, setCreatingRow] = React.useState(false);
    const [newRow, setNewRow] = React.useState<TabData>({
        eNombre: "",
        ePrioridad: 0,
        eId: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://ejemploetapa-production.up.railway.app/etapas"
                );
                setData(response.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);

    const handleCreateRow = () => {
        setCreatingRow(true);
    };

    const handleSaveRow = async () => {
        console.log(newRow);
        try {
            const response = await fetch(
                "https://ejemploetapa-production.up.railway.app/etapas",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        eNombre: newRow.eNombre,
                        ePrioridad: newRow.ePrioridad,
                        eEstado: 1,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Error al guardar la fila");
            }

            data.push(newRow);

            setNewRow({ eNombre: "", ePrioridad: 0, eId: "" });
            setCreatingRow(false);
        } catch (error) {
            console.error("Error al guardar la fila:", error);
        }
    };

    const handleEditRow = (eId: string) => {
        // Encuentra la fila correspondiente en el estado y actualiza su estado de edición
        const updatedData = data.map((row) => {
            if (row.eId === eId) {
                return { ...row, editing: true }; // Añade una propiedad 'editing' a la fila
            }
            return row;
        });

        setData(updatedData);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewRow({ ...newRow, eNombre: event.target.value });
    };

    const handlePriorityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewRow({ ...newRow, ePrioridad: parseInt(event.target.value) });
    };

    const handleDeleteRow = async (eId: string) => {
        console.log(eId);
        try {
            // Realiza una solicitud DELETE a la API para eliminar la fila de la base de datos
            await axios.delete(
                `https://ejemploetapa-production.up.railway.app/etapas/${eId}`
            );

            // Filtra los datos para eliminar la fila con el nombre correspondiente del estado local
            const updatedData = data.filter((row) => row.eId !== eId);
            setData(updatedData);
        } catch (error) {
            console.error("Error al eliminar la fila:", error);
        }
    };

    return (
        <BasicTable
            data={data}
            creatingRow={creatingRow}
            handlePriorityChange={handlePriorityChange}
            handleNameChange={handleNameChange}
            handleSaveRow={handleSaveRow}
            handleCreateRow={handleCreateRow}
            newRow={newRow}
            handleDeleteRow={handleDeleteRow}
            handleEditRow={handleEditRow}
        />
    );
};
