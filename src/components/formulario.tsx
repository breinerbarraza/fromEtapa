import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    // MenuItem,
    // Select,
    TextField,
    Typography,
} from "@mui/material";

interface TabData {
    eNombre: string;
    // content: React.ReactNode;
}

interface PageSolicitudProps {
    data: TabData[];
}

export const PageFormularioV: React.FC<PageSolicitudProps> = ({ data }) => {
    // export const PageSolicitudV: React.FC<PageSolicitudProps> = ({ data }) => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    // const options = ["Option 1", "Option 2", "Option 3"];

    console.log(data, "🌸🌸🌸🌸");
    return (
        <div
            style={{
                // backgroundColor: "#ad0c0c",
                height: "100vh",
                padding: "20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "auto",
                    // backgroundColor: "blue",
                    justifyContent: "space-between0",
                }}
            >
                <Box
                    mb={2}
                    sx={{
                        // backgroundColor: "red",
                        width: "30%",
                        height: "50px", // Altura ajustada para el TextField
                        padding: "5px", // Padding para el espacio interior
                    }}
                >
                    <TextField
                        variant="outlined"
                        label="Nombre de etapa"
                        fullWidth
                        size="small" // Tamaño más pequeño
                    />
                </Box>
                <Box
                    sx={{
                        // backgroundColor: "green",
                        width: "30%",
                        height: "50px", // Altura ajustada para el Select
                        padding: "5px", // Padding para el espacio interior
                    }}
                >
                    {/* <Autocomplete
                        variant="outlined"
                        defaultValue=""
                        fullWidth
                        size="small" // Tamaño más pequeño
                    >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Autocomplete> */}
                    {/* <Autocomplete
                        options={options}
                        size="small"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Autocomplete"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    /> */}
                    <Autocomplete
                        options={data.map((option) => option.eNombre)}
                        size="small"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Estados"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    />
                </Box>
            </div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    // backgroundColor: "red",
                    width: "40%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography>Editar</Typography>
                    <Checkbox {...label} />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography>Rechazar</Typography>
                    <Checkbox {...label} />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography>Pendiente</Typography>
                    <Checkbox {...label} />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography>Aprobar</Typography>
                    <Checkbox {...label} />
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "70px",
                    marginBottom: "10px",
                }}
            >
                <Button
                    style={{
                        backgroundColor: "green",
                        color: "#fff",
                        fontSize: "12px",
                    }}
                    // onClick={handleCreateRow}
                >
                    Guardar
                </Button>
            </Box>
        </div>
    );
};
