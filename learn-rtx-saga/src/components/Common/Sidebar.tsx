import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import React from "react";
import { NavLink } from "react-router-dom";
import '../Common/Sidebar.css';

export function Sidebar() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <nav aria-label="main mailbox folders">
            <List>
                <NavLink to="/admin/dashboard" className="links">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to="/admin/students" className="links">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                        <ListItemText primary="Student" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
              
            </List>
          </nav>
          <Divider />
        </Box>
      );
}