import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Page from "./ejemplo";

interface TabData {
    name: string;
    content: React.ReactNode;
}

interface PageSolicitudProps {
    data: TabData[];
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export const PageSolicitudV: React.FC<PageSolicitudProps> = ({ data }) => {
    const [value, setValue] = React.useState(0);

    console.log(data);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {data.map((item, index) => (
                        <Tab
                            key={index}
                            label={item.name}
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>
            </Box>
            {data.map((item, index) => {
                console.log(index, "🌸🌸🌸🌸");
                return (
                    <CustomTabPanel key={index} value={value} index={index}>
                        {index === 0 && <Page />}
                        {index === 1 && <Page />}
                        {index === 2 && <Page />}
                    </CustomTabPanel>
                );
            })}
        </Box>
    );
};
