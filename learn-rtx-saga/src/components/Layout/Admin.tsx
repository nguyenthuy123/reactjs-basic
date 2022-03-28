import { Box } from '@mui/material';
import '../Layout/Admin.css';
import React from 'react';
import { Header, Sidebar } from 'components/Common';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from 'features/dashboard';
import { StudentFeature } from 'features/student';

export function AdminLayout() {

    return (
        <Box className='layout'>
            <Box className="header">
                <Header/>
            </Box>
            <div className='main-flex'>
                <Box className="sidebar">
                    <Sidebar/>
                </Box>
                <Box className="main-sidebar">
                    <Switch>
                        <Route path="/admin/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="/admin/students">
                            <StudentFeature/>
                        </Route>
                    </Switch>
                </Box>
            </div>
        </Box>
    )
}