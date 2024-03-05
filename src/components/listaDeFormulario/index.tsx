import { Box, Divider, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import React from "react";

export const ListaFormularioV: React.FC<any> = ({ dataList }) => {
    const theme = useTheme();
    const columns: GridColDef[] = [
        {
            field: "teNombre",
            headerAlign: "center",
            align: "center",
            headerName: "NOMBRE DE ETAPA",
            flex: 4,
        },
        {
            field: "eNombre",
            headerAlign: "center",
            align: "center",
            headerName: "ESTADOS",
            flex: 3,
            renderCell: ({ row }) => {
                return <div>{row.estado?.eNombre}</div>;
            },
        },
        {
            field: "teEditar",
            headerAlign: "center",
            align: "center",
            headerName: "EDITAR",
            flex: 3,
            renderCell: ({ row }) => {
                return <div>{row.teEditar === 1 ? "Si" : "No"}</div>;
            },
        },
        {
            field: "teRechazar",
            headerAlign: "center",
            align: "center",
            headerName: "RECHAZAR",
            flex: 3,
            renderCell: ({ row }) => {
                return <div>{row.teRechazar === 1 ? "Si" : "No"}</div>;
            },
        },
        {
            field: "tePendiente",
            headerAlign: "center",
            align: "center",
            headerName: "PENDIENTE",
            flex: 3,
            renderCell: ({ row }) => {
                return <div>{row.tePendiente === 1 ? "Si" : "No"}</div>;
            },
        },
        {
            field: "teAprobar",
            headerAlign: "center",
            align: "center",
            headerName: "APROBAR",
            flex: 3,
            renderCell: ({ row }) => {
                return <div>{row.teAprobar === 1 ? "Si" : "No"}</div>;
            },
        },
    ];
    return (
        <Box sx={{ height: "auto", width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography>Lista de etapa</Typography>
            </Box>
            <Divider
                sx={{
                    marginBottom: "15px",
                    borderColor: theme.palette.primary.dark,
                }}
            />
            <Box sx={{ height: 500, width: "100%" }}>
                <DataGrid
                    rows={dataList || []}
                    columns={columns}
                    getRowId={(row: any) => row.teId}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    disableRowSelectionOnClick
                    slots={{ toolbar: GridToolbar }}
                    pageSizeOptions={[5]}
                />
            </Box>
        </Box>
    );
};
