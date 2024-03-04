import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

export const TipoSolicitudV: React.FC<any> = ({
  dataEtapa,
  dataValues,
  onChangeRegister,
  onChangeRegisterSelect,
  onSubmitRegister,
  addEtapa,
  deleteEtapa,
  onHandleName,
  trId,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box>
          {trId ? (
            <Typography>Actualizar de tramite</Typography>
          ) : (
            <Typography>Creación de tramite</Typography>
          )}
          <Divider
            sx={{
              marginBottom: "10px",
              borderColor: theme.palette.primary.dark,
            }}
          />
        </Box>
        <form action="submit" onSubmit={onSubmitRegister}>
          <Grid container sx={{ marginBottom: "15px" }}>
            <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
              <Box sx={{ width: "100%" }}>
                <TextField
                  name="trNombre"
                  variant="outlined"
                  label="Nombre del tramite"
                  fullWidth
                  size="small" // Tamaño más pequeño
                  onChange={onHandleName}
                />
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Etapas</Typography>
              <Button onClick={addEtapa}>
                <AddCircleIcon color="primary" sx={{ cursor: "pointer" }} />
              </Button>
            </Box>
            <Divider
              sx={{
                marginBottom: "10px",
                borderColor: theme.palette.primary.dark,
              }}
            />
          </Box>
          {dataValues.map((x: any, i: number) => {
            console.log(x);
            return (
              <Grid key={x.id} container sx={{ marginBottom: "15px" }}>
                <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
                  <Autocomplete
                    options={dataEtapa.map((option: any) => ({
                      label: option.teNombre,
                      teId: option.teId,
                    }))}
                    id={`estado`}
                    onChange={(e, newValue) =>
                      onChangeRegisterSelect(e.target, newValue, i)
                    }
                    size="small"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Etapa"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
                  <Box sx={{ width: "100%" }}>
                    <TextField
                      name={`eOrden`}
                      variant="outlined"
                      label="Orden de la etapa"
                      fullWidth
                      size="small" // Tamaño más pequeño
                      onChange={(e) => onChangeRegister(e, i)}
                    />
                  </Box>
                </Grid>
                {dataValues.length > 1 && (
                  <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
                    <Button onClick={() => deleteEtapa(x.id)}>
                      <DeleteIcon color="error" sx={{ cursor: "pointer" }} />
                    </Button>
                  </Grid>
                )}
              </Grid>
            );
          })}
          <Button variant="contained" type="submit">
            {trId ? "ACTUALIZAR" : "CREAR"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};
