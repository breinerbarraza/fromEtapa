import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import Page from "../ejemploo";

export const PageSolicitudV: React.FC<any> = ({ data }) => {
  const theme = useTheme();

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
        <Typography>Etapas</Typography>
      </Box>
      <Divider
        sx={{
          marginBottom: "15px",
          borderColor: theme.palette.primary.dark,
        }}
      />
      <Box>
        <Grid container sx={{ marginBottom: "15px" }}>
          {data?.map((x: any) => {
            return (
              <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
                <Box
                  sx={{
                    borderRadius: "5px",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "5px",
                    backgroundColor: "grey",
                    boxShadow: "0px 0px 10px 5px rgba(154, 148, 148, 0.5);",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box
                      sx={{
                        width: "20%",
                        borderRadius: "5px",
                        backgroundColor: "#1976d2",
                        boxShadow: "0px 0px 2px 1px #1976d2",
                      }}
                    >
                      <Typography sx={{ color: "white" }}>23</Typography>
                    </Box>
                    <Box sx={{ width: "80%" }}>
                      <Typography sx={{ color: "white" }}>
                        {x?.teNombre?.toUpperCase()}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ paddingTop: "5px" }}>
                    <Link to={`/listaSolicitudes/${x.teId}`}>
                      <Button
                        variant="contained"
                        sx={{ width: "80%", height: "20px", paddingTop: "5px" }}
                        onClick={() => console.log(x?.teId, "el chamo")}
                      >
                        <Typography sx={{ fontSize: "13px" }}>
                          VER SOLICITUDES
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
