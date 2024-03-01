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
import React from "react";

export const SolicitudV: React.FC<any> = ({
  dataTipoEtapa,
  onChangeRegister,
  onChangeRegisterSelect,
  onSubmitRegister,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box>
          <Typography>Creación de solicitud</Typography>
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
                  name="aNombre"
                  variant="outlined"
                  label="Nombre de la solicitud"
                  fullWidth
                  size="small" // Tamaño más pequeño
                  onChange={onChangeRegister}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
              <Box sx={{ width: "100%" }}>
                <TextField
                  name="aTipoIdentidad"
                  variant="outlined"
                  label="Tipo de identidad del solicitante"
                  fullWidth
                  size="small" // Tamaño más pequeño
                  onChange={onChangeRegister}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
              <Box sx={{ width: "100%" }}>
                <TextField
                  name="aIdentidad"
                  variant="outlined"
                  label="Identidad del solicitante"
                  fullWidth
                  size="small" // Tamaño más pequeño
                  onChange={onChangeRegister}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
              <Box sx={{ width: "100%" }}>
                <TextField
                  name="aCoordenada"
                  variant="outlined"
                  label="Coordenadas de terreno"
                  fullWidth
                  size="small" // Tamaño más pequeño
                  onChange={onChangeRegister}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "15px" }}>
            <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
              <Autocomplete
                options={dataTipoEtapa.map((option: any) => ({
                  label: option.teNombre,
                  tipoSolicitud: option.teId,
                }))}
                id="tipoSolicitud"
                onChange={(e, newValue) =>
                  onChangeRegisterSelect(e.target, newValue)
                }
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tipo de solicitud"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button variant="contained" type="submit">
            CREAR
          </Button>
        </form>
      </Box>
    </Box>
  );
};
