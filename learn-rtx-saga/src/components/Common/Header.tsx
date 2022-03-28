import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect } from "react";
import { useAppDispatch } from "app/hooks";
import cityApi from "api/cityApi";
import { authActions } from "features/auth/pages/authSlice";

export function Header() {

    const dispatch = useAppDispatch();

    useEffect(() => {
      cityApi.getAll().then((response) => console.log(response))
    })
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Student Manager
                </Typography>
                    <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
    
}