import { Group, Home, ManageAccounts, ModeNight, Pages, People, Settings, Store } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{display:{xs:'none', sm:'block'}}}>
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/home'>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/pages'>
                        <ListItemIcon>
                            <Pages />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/groups'>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/marketplace'>
                        <ListItemIcon>
                            <Store />
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/friends'>
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/settings'>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/profile'>
                        <ListItemIcon>
                            <ManageAccounts />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch defaultChecked />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;