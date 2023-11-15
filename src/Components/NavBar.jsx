import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';



const pages = ['Store', 'Orders', 'Analytics'];




const Navbar=()=>{

return (

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: 'green' }}>
        <Typography variant="h6" component="div" sx={{ alignItems: 'left', marginLeft: '50px' }}>
          Reeco
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: 'white', display: 'block', marginLeft: '50px', textTransform: 'capitalize' }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{marginRight:'50px'}}>
        <IconButton color="inherit" aria-label="Cart" sx={{marginRight:'50px'}}>
          <ShoppingCartIcon />
          <Badge badgeContent={1} color="error"></Badge> 
        </IconButton>
        <IconButton color="inherit" aria-label="Login">
          <AccountCircleIcon />
        </IconButton>
        </Box>
       
      </Toolbar>
    </AppBar>
  </Box>


)


}
export default Navbar;


