import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
    Box,
    Button,
    Divider,
    IconButton,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";

interface TabData {
    eNombre: string;
    ePrioridad: number;
}

interface TData {
    data: TabData[];
    creatingRow: {
        createRow: boolean;
        updateRow: boolean;
    };
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSaveRow: () => Promise<void>;
    handleCreateRow: () => void;
    newRow: TabData;
    handleEditRow: () => void;
    handleDeleteRow: (eId: string) => void;
    handleEditOpen: any;
}

export const BasicTable: React.FC<TData> = ({
    data,
    creatingRow,
    handleNameChange,
    handleCreateRow,
    handleSaveRow,
    newRow,
    handleDeleteRow,
    handleEditRow,
    handleEditOpen,
}) => {
    const theme = useTheme();
    const columns: GridColDef[] = [
        {
            field: "eNombre",
            headerAlign: "center",
            align: "center",
            headerName: "NOMBRE",
            flex: 4,
        },
        {
            field: "ePrioridad",
            headerAlign: "center",
            align: "center",
            headerName: "PRIORIDAD",
            flex: 3,
        },
        {
            field: "2",
            headerAlign: "center",
            align: "center",
            headerName: "ACCIONES",
            flex: 3,
            renderCell: ({ row }: any) => {
                return (
                    <div>
                        <IconButton onClick={() => handleEditOpen(row.eId)}>
                            <ModeEditIcon
                                style={{
                                    color: "green",
                                }}
                            />
                        </IconButton>
                        <IconButton
                            style={{
                                color: "red",
                            }}
                            onClick={() => handleDeleteRow(row.eId)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                );
            },
        },
    ];
    return (
        <Box sx={{ height: "auto", width: "100%" }}>
            <Typography>Lista de Estados</Typography>
            <Divider
                sx={{
                    marginBottom: "15px",
                    borderColor: theme.palette.primary.dark,
                }}
            />
            {!creatingRow.createRow && (
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                        marginBottom: "10px",
                    }}
                >
                    <Button
                        style={{
                            backgroundColor: "green",
                            color: "#fff",
                            fontSize: "12px",
                        }}
                        onClick={handleCreateRow}
                    >
                        Crear
                    </Button>
                </Box>
            )}
            {creatingRow.createRow && (
                <Button onClick={handleSaveRow}>Guardar</Button>
            )}
            <Box sx={{ height: 500, width: "100%" }}>
                <DataGrid
                    rows={data || []}
                    columns={columns}
                    getRowId={(row: any) => row.eId}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    pageSizeOptions={[5]}
                />
            </Box>
            {(creatingRow?.createRow || creatingRow.updateRow) && (
                <TableRow
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <TableCell sx={{ borderBottom: "none" }}>
                        <TextField
                            label="Nombre de etapa"
                            fullWidth
                            name="eNombre"
                            value={newRow.eNombre}
                            onChange={handleNameChange}
                            size="small"
                        />
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                        <TextField
                            name="ePrioridad"
                            label="Nombre de etapa"
                            fullWidth
                            value={newRow.ePrioridad}
                            onChange={handleNameChange}
                            size="small"
                        />
                    </TableCell>
                    {creatingRow.updateRow && (
                        <Button
                            sx={{ backgroundColor: "green", color: "#fff" }}
                            onClick={() => handleEditRow()}
                        >
                            Guardar
                        </Button>
                    )}
                </TableRow>
            )}
        </Box>
    );
};
