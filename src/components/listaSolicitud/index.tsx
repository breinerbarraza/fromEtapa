import React from "react";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

export const ListaSolicitudesV: React.FC<any> = ({ data }) => {
  console.log(data);
  const theme = useTheme();
  const columns: GridColDef[] = [
    {
      field: "trNombre",
      headerAlign: "center",
      align: "center",
      headerName: "NOMBRE",
      flex: 4,
    },
    {
      field: "1",
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
            <Link to={`/tipoTramite/${row.trId}`}>
              <IconButton>
                <ModeEditIcon
                  style={{
                    color: "green",
                  }}
                />
              </IconButton>
            </Link>
            <IconButton
              style={{
                color: "red",
              }}
              onClick={() => console.log(row.trId)}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>
          LISTA DE SOLICITUDES - {data?.teNombre?.toUpperCase()}
        </Typography>
      </Box>
      <Divider
        sx={{
          marginBottom: "15px",
          borderColor: theme.palette.primary.dark,
        }}
      />
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={[]}
          columns={columns}
          getRowId={(row: any) => row.trId}
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
