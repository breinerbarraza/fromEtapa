import React from "react";
import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export const SolicitudV = () => {
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
        <Grid container sx={{ marginBottom: "15px" }}>
          <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
            <Box sx={{ width: "100%" }}>
              <TextField
                variant="outlined"
                label="Nombre de la solicitud"
                fullWidth
                size="small" // Tamaño más pequeño
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
            <Box sx={{ width: "100%" }}>
              <TextField
                variant="outlined"
                label="Tipo de identidad del solicitante"
                fullWidth
                size="small" // Tamaño más pequeño
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
            <Box sx={{ width: "100%" }}>
              <TextField
                variant="outlined"
                label="Identidad del solicitante"
                fullWidth
                size="small" // Tamaño más pequeño
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
            <Box sx={{ width: "100%" }}>
              <TextField
                variant="outlined"
                label="Coordenadas de terreno"
                fullWidth
                size="small" // Tamaño más pequeño
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ marginBottom: "15px" }}>
          <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
            <Autocomplete
              options={[]}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Autocomplete"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
