import React from 'react';
import { AppBar, styled, Toolbar, Typography, Box } from '@mui/material';

const Navbar = () => {

    const StyledToolbar = styled(Toolbar)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    });

    const MenuBox = styled(Box)({
        display:'flex',
        gap:30,
        cursor:'pointer',
    });

    const MenuItems = [
        {Name:'Home',Link:'#'},
        {Name:'Recipes',Link:'#'},
        {Name:'About Us',Link:'#'},
        {Name:'Subscribe',Link:'#'}, 
    ];

  return (
    <AppBar color='default' position='sticky' elevation={0}>
       <StyledToolbar>
         <Box>
            <Typography variant="h4" color={"tomato"}>Codings</Typography>
         </Box>

         <MenuBox>
          {MenuItems.map((item)=>(
             <Typography variant="body2">{item.Name}</Typography>
          ))}
         </MenuBox>
       </StyledToolbar>
    </AppBar>
  )
}

export default Navbar