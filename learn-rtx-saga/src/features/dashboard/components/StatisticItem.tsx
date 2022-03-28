import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export interface StatisticItemProps {
    icon: React.ReactElement;
    label: string;
    value: string | number;
}

export function StatisticItem ({icon, label, value}: StatisticItemProps) {
    return (
        <div className="statistic">
            <Paper style={{display:"flex", justifyContent:"space-between"}}>
                <Box>{icon}</Box>

                <Box>
                    <Typography variant="h5">{value}</Typography>
                    <Typography variant="caption">{label}</Typography>
                </Box>
            </Paper>
        </div>
    )
}