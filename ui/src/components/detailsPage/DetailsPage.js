import { CardMedia, Container, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import burger from '../../static/burger1.jpg';
import { Box } from '@mui/system';
import React from 'react';
import Category from '../categoryList/Category';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';;

const DetailsPage = () => {
  return (
    <Container>
        <Category />
        <Typography variant='h3' align='center' mt={4}>
            Title of the Recipe
        </Typography>

        <Typography variant='body2' align='center' color={'GrayText'} p={4}>
            these recipes mau contain afiliat links Please read my disclosure policy.
        </Typography>

        <Typography variant='body1' align='center' m={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </Typography>

       <Box sx={{display:'flex',justifyContent:'center'}}>
           <CardMedia 
           sx={{height:'500px',width:'500px'}} 
           component='img'
           image={burger}
           alt='burger'
           />
       </Box>

       <Typography variant='body1' align='center' m={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </Typography>

       <Typography variant='h3' align='center' m={2}>
         Ingredients
       </Typography>
       <List>
          <ListItemButton>
                <ListItemIcon>
                    <DoubleArrowIcon />
                 </ListItemIcon>
                        <ListItemText primary='Meat'/>
           </ListItemButton>

           <ListItemButton>
                <ListItemIcon>
                    <DoubleArrowIcon />
                 </ListItemIcon>
                        <ListItemText primary='Cheese'/>
           </ListItemButton>

           <ListItemButton>
                <ListItemIcon>
                    <DoubleArrowIcon />
                 </ListItemIcon>
                        <ListItemText primary='Onion'/>
           </ListItemButton>

           <ListItemButton>
                <ListItemIcon>
                    <DoubleArrowIcon />
                 </ListItemIcon>
                        <ListItemText primary='Burger Bread'/>
           </ListItemButton>

           <ListItemButton>
                <ListItemIcon>
                    <DoubleArrowIcon />
                 </ListItemIcon>
                        <ListItemText primary='Burger Sauce'/>
           </ListItemButton>
       </List>
       <Typography variant='body1' align='center' m={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
       </Typography>

       <Typography variant='h5' color={'white'} bgcolor={'black'} align='center'>
          You may also like
       </Typography>
    </Container>
  )
}

export default DetailsPage