import { Box, Button, makeStyles, Paper, Typography } from "@mui/material";
import { useAppDispatch } from "app/hooks";
import React from "react";
import '../pages/LoginPage.css'
import { authActions } from "./authSlice";

// const useStyles = makeStyles(() => ({
//     root: {

//     },
// }));

export default function LoginPage() {
    const dispatch = useAppDispatch();

    const handleLoginCLick = () => {
        dispatch(
            authActions.login({
                username: '',
                password: '',
            })
        )
    }

    return(
        <div className="loginpage" >
            <Paper className="paper">
                <Typography variant="h5" component="h1">Student Management</Typography>

                <Box mt={4}>
                    <Button fullWidth variant="contained" color="primary" onClick={handleLoginCLick}>
                        Fake Login
                    </Button>
                </Box>
            </Paper>
        </div>
    )
}