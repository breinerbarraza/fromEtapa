import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

interface TabData {
  eNombre: string;
  ePrioridad: number;
  eId: string;
  // Agregar otras propiedades si son relevantes para tus datos
}

interface TData {
  data: TabData[];
  creatingRow: boolean;
  // handlePriorityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriorityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveRow: () => Promise<void>;
  handleCreateRow: () => void;
  newRow: TabData;
  handleEditRow: (eId: string) => void;
  handleDeleteRow: (eId: string) => void;
  dataUpdate: any;
  handleTextFieldChange: any;
  // eId: string
}

export const BasicTable: React.FC<TData> = ({
  data,
  creatingRow,
  handlePriorityChange,
  handleNameChange,
  handleCreateRow,
  handleSaveRow,
  newRow,
  handleDeleteRow,
  handleEditRow,
  dataUpdate,
  handleTextFieldChange,
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
    },
  ];
  return (
    // <Box
    //   sx={{
    //     height: "98vh",
    //     width: "100%",
    //     padding: "0px",
    //     margin: "0px",
    //   }}
    // >
    //   {!creatingRow && (
    //     <Button style={{ backgroundColor: "red" }} onClick={handleCreateRow}>
    //       Crear
    //     </Button>
    //   )}
    //   {creatingRow && <Button onClick={handleSaveRow}>Guardar</Button>}
    //   <Box
    //     sx={{
    //       height: "auto",
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <TableContainer component={Paper}>
    //       <Table aria-label="simple table">
    //         <TableHead>
    //           <TableRow>
    //             <TableCell>Nombre</TableCell>
    //             <TableCell>Prioridad</TableCell>
    //             <TableCell>Acciones</TableCell>
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {data.map((row, i) => (
    //             <TableRow key={row.eId}>
    //               <TableCell component="th" scope="row">
    //                 {row.eNombre}
    //                 <input
    //                   name={`eNombre${i}`}
    //                   value={dataUpdate.eNombre}
    //                   onChange={(e) => handleTextFieldChange(e)}
    //                 />
    //               </TableCell>
    //               <TableCell>
    //                 {row.ePrioridad}
    //                 <input
    //                   name={`ePrioridad${i}`}
    //                   value={dataUpdate.ePrioridad}
    //                   onChange={(e) => handleTextFieldChange(e)}
    //                 />
    //               </TableCell>
    //               <TableCell>
    //                 <IconButton onClick={() => handleEditRow(row.eId)}>
    //                   <ModeEditIcon
    //                     style={{
    //                       color: "green",
    //                     }}
    //                   />
    //                 </IconButton>
    //                 <IconButton
    //                   style={{
    //                     color: "red",
    //                   }}
    //                   onClick={() => handleDeleteRow(row.eId)}
    //                 >
    //                   <DeleteIcon />
    //                 </IconButton>
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //           {creatingRow && (
    //             <TableRow>
    //               <TableCell>
    //                 <input value={newRow.eNombre} onChange={handleNameChange} />
    //               </TableCell>
    //               <TableCell>
    //                 <input
    //                   type="number"
    //                   value={newRow.ePrioridad}
    //                   onChange={handlePriorityChange}
    //                 />
    //               </TableCell>
    //             </TableRow>
    //           )}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </Box>
    // </Box>
    <Box sx={{ height: 400, width: "100%" }}>
      <Typography>Lista de Estados de etapa</Typography>
      <Divider
        sx={{
          marginBottom: "15px",
          borderColor: theme.palette.primary.dark,
        }}
      />
      <DataGrid
        rows={data || []}
        columns={columns}
        getRowId={(row: any) => row.eId}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        // loading={loading}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
};
