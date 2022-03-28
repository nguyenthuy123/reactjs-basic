import { Box, Paper, Typography } from "@mui/material";

export interface WidgetProps {
    title: string;
    children: any;
}

export function Widget( {title, children}: WidgetProps) {
    return (
        <Paper>
            <Typography variant="button">{title}</Typography>

            <Box mt={2}>{children}</Box>
        </Paper>
    )
}