import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Hidden, Box, MenuItem, Menu, ListItemIcon, Divider, } from "@mui/material";
import { Person, Menu as MenuIcon } from '@mui/icons-material';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LanguageIcon from '@mui/icons-material/Language';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PolicyIcon from '@mui/icons-material/Policy';
import logo from '../../assets/image/download.jfif';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
  };

  return (
    <AppBar  position="fixed" sx={{ backgroundColor: '#3f51b5', width: '100%' }}>
      <Toolbar>
        <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} sx={{paddingRight:'20px',paddingLeft:'0px'}}>
          <MenuIcon />
        </IconButton>
        <img className="rounded-pill" width="60" height="50" src={logo} alt="Logo" 
        style={{ paddingBottom: '10px', paddingTop: '4px', borderRadius: '50%', objectFit: 'cover', paddingRight: '20px' }}/>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>SKM TRAVELS</Typography>
        
        {/* <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { width: 300 } }}>
            <Box sx={{backgroundColor:"#000000",paddingY:'17px'}}>
                <Typography variant="h6" sx={{ paddingX: '10px',fontStyle:'Bold',fontSize:'24px',color:'white',fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', }}>Loganathan V</Typography>
                <Typography variant="h6" sx={{ paddingX: '10px',fontSize:'17px',color:'white',fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', }}>Email</Typography>
                <Typography variant="h6" sx={{ paddingX: '10px',fontSize:'17px',color:'white',fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', }}>Phone Number</Typography>
            </Box>
        </Drawer> */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { width: 350 } }}>
         <Box sx={{ backgroundColor: '#000000', paddingY: '17px' }}>
          <Typography variant="h6" sx={{ paddingX: '10px', fontWeight: 'bold', fontSize: '24px', color: 'white',
           fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',}} > Loganathan Velumani </Typography>
        <Typography variant="body2" sx={{ paddingX: '10px', fontSize: '17px', color: 'white', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>
          fiwip16098@paxnw.com
        </Typography>
        <Typography variant="body2" sx={{ paddingX: '10px', fontSize: '17px', color: 'white', 
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }} >
          8838398756
        </Typography>
      </Box>

      <List>
        <ListItem button>
          <ListItemIcon>
            <CreditScoreIcon />
          </ListItemIcon>
          <ListItemText primary="Credits" secondary="0"  
          sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="Z-POINTS" secondary="0" 
            sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="Paytm wallet" secondary="Link wallet" 
          sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}/>
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary="My Trips" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favourite Cars" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary="Change City" secondary="sankari" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Change Language" secondary="English" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="Become a Host" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Investor Relations" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AnnouncementIcon />
          </ListItemIcon>
          <ListItemText primary="Press Releases" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PolicyIcon />
          </ListItemIcon>
          <ListItemText primary="Zoomcar Host Vehicles Policies" />
        </ListItem>
      </List>
    </Drawer>
        <Hidden smDown>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
        <Person sx={{ marginLeft: 1 ,paddingX:'3px'}}/>
         LOGANATHAN V
        <IconButton onClick={handleClick} size="small" sx={{ ml: 1 }}>
          {/* You can use an icon here, like a dropdown arrow */}
          ▼
          {/* <Icon icon="cuida:caret-down-outline" sx={{color:"white",backgroundColor:'black'}} /> */}
        </IconButton>
      </Typography>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
