import React, { useEffect, useState } from "react";
import axios from "axios";
import { PageFormularioV } from "../../components/formulario";

interface TabData {
    teNombre: string;
    eNombre: string;
}
interface TNewRow {
    teNombre: string;
    estado: string;
    teEditar: number;
    teRechazar: number;
    tePendiente: number;
    teAprobar: number;
}

export const PageFormularioC = () => {
    const [data, setData] = useState<TabData[]>([]);
    const [dataList, setDataList] = useState<any[]>([]);
    console.log(dataList, "-➕➕➕");
    const [newRow, setNewRow] = React.useState<TNewRow>({
        teNombre: "",
        estado: "",
        teEditar: 2,
        teRechazar: 2,
        tePendiente: 2,
        teAprobar: 2,
    });

    console.log(newRow, "🤫🤫🤫🤫🤫");

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
    }, []);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewRow({
            ...newRow,
            [event.target.name]: event.target.value,
        });
    };

    const handleAutocompleteChange = (
        event: React.ChangeEvent<{}>,
        value: any | null
    ) => {
        console.log(event, value);

        setNewRow({
            ...newRow,
            estado: value.estados,
        });
    };
    console.log(newRow);
    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, checked } = event.target;

        setNewRow({
            ...newRow,
            [name]: checked ? 1 : 2,
        });
    };

    const handleSaveRow = async () => {
        try {
            const response = await fetch(
                "https://ejemploetapa-production.up.railway.app/etapa",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        teNombre: newRow.teNombre,
                        estado: newRow.estado,
                        teEditar: +newRow.teEditar,
                        teRechazar: +newRow.teRechazar,
                        tePendiente: +newRow.tePendiente,
                        teAprobar: +newRow.teAprobar,
                        teEstado: 1,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Error al guardar la fila");
            }

            fetchDataList();
        } catch (error) {
            console.error("Error al guardar la fila:", error);
        }
    };

    useEffect(() => {
        fetchDataList();
    }, []);

    const fetchDataList = async () => {
        try {
            const response = await axios.get(
                "https://ejemploetapa-production.up.railway.app/etapa"
            );
            setDataList(response.data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    return (
        <PageFormularioV
            data={data}
            newRow={newRow}
            handleNameChange={handleNameChange}
            handleAutocompleteChange={handleAutocompleteChange}
            handleSaveRow={handleSaveRow}
            handleCheckboxChange={handleCheckboxChange}
            dataList={dataList}
        />
    );
};
