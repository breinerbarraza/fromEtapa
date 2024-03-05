import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    TextField,
    Typography,
} from "@mui/material";
import { ListaFormularioV } from "./listaDeFormulario";

interface TabData {
    teNombre: string;
    eNombre: string;
}

interface PageSolicitudProps {
    data: TabData[];
    newRow: any;
    handleNameChange: any;
    handleSaveRow: any;
    handleAutocompleteChange: any;
    handleCheckboxChange: any;
    dataList: any;
}

export const PageFormularioV: React.FC<PageSolicitudProps> = ({
    data,
    newRow,
    handleNameChange,
    handleSaveRow,
    handleAutocompleteChange,
    handleCheckboxChange,
    dataList,
}) => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    return (
        <div
            style={{
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
                    justifyContent: "space-between0",
                }}
            >
                <Box
                    mb={2}
                    sx={{
                        width: "30%",
                        height: "50px",
                        padding: "5px",
                    }}
                >
                    <TextField
                        label="Nombre de etapa"
                        fullWidth
                        size="small"
                        name="teNombre"
                        value={newRow.teNombre}
                        onChange={handleNameChange}
                    />
                </Box>
                <Box
                    sx={{
                        width: "30%",
                        height: "50px",
                        padding: "5px",
                    }}
                >
                    <Autocomplete
                        options={data.map((option: any) => ({
                            label: option.eNombre,
                            estados: option.eId,
                        }))}
                        id="estados"
                        onChange={(e, newValue) =>
                            handleAutocompleteChange(e.target, newValue)
                        }
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
                    <Checkbox
                        name="teEditar"
                        {...label}
                        onChange={handleCheckboxChange}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography>Rechazar</Typography>
                    <Checkbox
                        name="teRechazar"
                        {...label}
                        onChange={handleCheckboxChange}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography>Pendiente</Typography>
                    <Checkbox
                        name="tePendiente"
                        {...label}
                        onChange={handleCheckboxChange}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography>Aprobar</Typography>
                    <Checkbox
                        name="teAprobar"
                        {...label}
                        onChange={handleCheckboxChange}
                    />
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
                    onClick={handleSaveRow}
                >
                    Guardar
                </Button>
            </Box>
            <ListaFormularioV dataList={dataList} />
        </div>
    );
};
