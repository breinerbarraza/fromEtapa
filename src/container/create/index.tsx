import React, { useEffect, useState } from "react";

import axios from "axios";
import { BasicTable } from "../../components/kathe";

interface TabData {
    eNombre: string;
    ePrioridad: number;
}

export const PageCreateC = () => {
    const [data, setData] = useState<TabData[]>([]);
    const [dataId, setDataId] = useState("");
    const [creatingRow, setCreatingRow] = React.useState<any>({
        createRow: false,
        updateRow: false,
    });
    const [newRow, setNewRow] = React.useState<TabData>({
        eNombre: "",
        ePrioridad: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://ejemploetapa-production.up.railway.app/estado"
                );
                setData(response.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, [creatingRow]);

    const handleCreateRow = () => {
        setCreatingRow({ ...creatingRow, createRow: true });
    };

    const handleSaveRow = async () => {
        try {
            const response = await fetch(
                "https://ejemploetapa-production.up.railway.app/estado",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        eNombre: newRow.eNombre,
                        ePrioridad: +newRow.ePrioridad,
                        eEstado: 1,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Error al guardar la fila");
            }

            setCreatingRow(false);
        } catch (error) {
            console.error("Error al guardar la fila:", error);
        }
    };

    const handleEditOpen = async (eId: string) => {
        setCreatingRow({ ...creatingRow, updateRow: true });
        try {
            const response = await axios.get(
                `https://ejemploetapa-production.up.railway.app/estado/${eId}`
            );
            setNewRow({
                eNombre: response.data.eNombre,
                ePrioridad: response.data.ePrioridad,
            });
            setDataId(response.data);
        } catch (error) {
            console.error("Error al obtener datos para editar:", error);
        }
        setDataId(eId);
    };

    const handleEditRow = async () => {
        try {
            console.log(dataId, newRow);
            await axios.patch(
                `https://ejemploetapa-production.up.railway.app/estado/${dataId}`,
                {
                    eNombre: newRow.eNombre,
                    ePrioridad: +newRow.ePrioridad,
                }
            );
        } catch (error) {
            console.error("Error al obtener datos para editar:", error);
        }
        setCreatingRow({ ...creatingRow, updateRow: true });
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewRow({
            ...newRow,
            [event.target.name]: event.target.value,
        });
    };

    const handleDeleteRow = async (eId: string) => {
        try {
            await axios.delete(
                `https://ejemploetapa-production.up.railway.app/estado/${eId}`
            );

            const updatedData = data.filter((row: any) => row.eId !== eId);
            setData(updatedData);
        } catch (error) {
            console.error("Error al eliminar la fila:", error);
        }
    };

    return (
        <BasicTable
            data={data}
            creatingRow={creatingRow}
            handleNameChange={handleNameChange}
            handleSaveRow={handleSaveRow}
            handleCreateRow={handleCreateRow}
            newRow={newRow}
            handleDeleteRow={handleDeleteRow}
            handleEditRow={handleEditRow}
            handleEditOpen={handleEditOpen}
        />
    );
};
