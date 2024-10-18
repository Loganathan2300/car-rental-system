import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, Hidden, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Person, Menu as MenuIcon } from '@mui/icons-material';
import logo from '../../assets/image/download.jfif';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5', width: '100%' }}>
      <Toolbar>
        <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} sx={{paddingRight:'16px'}}>
          <MenuIcon />
        </IconButton>
        <img className="rounded-pill" width="60" height="50" src={logo} alt="Logo" 
        style={{ paddingBottom: '10px', paddingTop: '4px', borderRadius: '50%', objectFit: 'cover', paddingRight: '20px' }}/>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>SKM TRAVELS</Typography>
        
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { width: 250 } }}>
            <Box sx={{backgroundColor:"#3f51b5",paddingY:'17px'}}>
                <Typography variant="h6" sx={{ paddingX: '10px',fontStyle:'Bold',fontSize:'24px',color:'white' }}>Loganathan V</Typography>
                <Typography variant="h6" sx={{ paddingX: '10px',fontSize:'17px',color:'white' }}>Email</Typography>
                <Typography variant="h6" sx={{ paddingX: '10px',fontSize:'17px',color:'white' }}>Phone Number</Typography>
            </Box>
        </Drawer>


        <Hidden smDown>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
            LOGANATHAN V
            <Person sx={{ marginLeft: 1 }} />
          </Typography>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
