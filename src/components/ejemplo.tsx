import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  GridRowsProp,
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";

const initialRows: GridRowsProp = [
  {
    id: 1,
    name: "asdsdfsdf",
    age: 25,
    joinDate: "asdasdasd",
    role: "sdfsdf",
  },
  {
    id: 2,
    name: "asdadasd",
    age: 36,
    joinDate: "sdfasfd",
    role: "asdas",
  },
];

export default function Page({ item, dataList }: any) {
  // console.log(item);

  const columns: GridColDef[] = [
    { field: "aNombre", headerName: "NOMBRES", flex: 3 },
    {
      field: "aTipoIdentidad",
      headerName: "TIPO DE IDENTIDAD",
      flex: 2,
    },
    {
      field: "aIdentidad",
      headerName: "NÚMERO DE IDENTIDAD",
      flex: 3,
    },
    {
      field: "aCoordenada",
      headerName: "COORDENADAS",
      flex: 2,
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={dataList || []}
        columns={columns}
        getRowId={(row: any) => row.aId}
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
      <Box sx={{ display: "flex" }}>
        {item?.teEditar === 1 && (
          <Button variant="outlined">EDITAR</Button>
        )}
        {item?.teRechazar === 1 && (
          <Button variant="outlined">RECHAZAR</Button>
        )}
        {item?.tePendiente === 1 && (
          <Button variant="outlined">PENDIENTE</Button>
        )}
        {item?.teAprobar === 1 && (
          <Button variant="outlined">APROBAR</Button>
        )}
      </Box>
    </Box>
  );
}
