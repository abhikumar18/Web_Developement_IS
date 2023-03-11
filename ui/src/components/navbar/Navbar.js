import React, { useState } from 'react';
import { AppBar, styled, Toolbar, Typography, Box, TextField, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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

  const [openMenu,setOpenMenu] = useState(false);

  return (
    <>
    <AppBar color='default' position='sticky' elevation={0}>
       <StyledToolbar>
         <Box flex={{xs:25,md:1}}>
            <Typography 
                variant="h4" 
                color={"tomato"}
                sx={{fontFamily:'splash,cursive',textAlign:{xs:'center',md:'left'},}}
                >
                  Testing</Typography>
         </Box>

         <MenuBox 
             flex={1} 
             sx= {{display:{xs:'none',md:'flex'}}}>
             {MenuItems.map((item)=>(
             <Typography variant="body2">{item.Name}</Typography>
          ))}
         </MenuBox>
         <Box flex={1}>
             <TextField 
                 sx= {{display:{xs:'none',md:'flex'}}}
                 color='warning' 
                 label="Search Here!" 
                 variant="standard" />
                <MenuIcon  
                    sx={{display:{xs:'flex',md:'none'},cursor:'pointer'}} 
                    onClick={()=>setOpenMenu(!openMenu)} />
         </Box>
       </StyledToolbar>
       <Drawer
      anchor={'top'}
      open={openMenu}
      onClose={()=>setOpenMenu(!openMenu)}
    >
      {/* {list(anchor)} */}
      <List>
        <ListItem>
        {MenuItems.map((item)=>(
             <ListItemButton>{item.Name}</ListItemButton>
          ))}
        </ListItem>
      </List>
      <TextField 
                 sx= {{display:{xs:'flex',md:'none'}}}
                 color='warning' 
                 label="Search Here!" 
                 variant="outlined" 
        />
    </Drawer>
    </AppBar>
    
    <Box 
       sx={{
        display:'flex',
        justifyContent:'center',
        flexDirection:{xs:'column',md:'row'},
        padding:1
        }}
    >
    <Typography align = 'center' variant='h5' mr={{xs:0,md:1}}>
       Simple Recipes for coders
    </Typography>

    <Typography align = 'center' variant='h5' color={'tomato'} sx={{fontFamily:'Jost,sans-serif'}}>
       Simple Recipes for coders
    </Typography>
</Box>
</>
  );
};

export default Navbar