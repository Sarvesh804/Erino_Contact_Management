import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import { Add, ListAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = ({theme}) => {
  return (
    <Drawer variant="permanent" 
    sx={{
         width: 240,
         flexShrink: 0,
         [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: 'border-box',
          },
          color:"#ffffff"

    }}>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button component={Link} to="/add-contact">
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Add Contact" sx={{ color: theme === 'light' ? '#000' : '#fff' }}/>
        </ListItem>
        <ListItem button component={Link} to="/contact-list">
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary="Contact List" sx={{ color: theme === 'light' ? '#000' : '#fff'}} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
