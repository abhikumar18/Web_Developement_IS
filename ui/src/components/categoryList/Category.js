import { Container } from '@mui/system';
import React from 'react'
import { styled } from "@mui/material/styles"; 
import { Grid, Typography } from '@mui/material';
import { Box} from '@mui/system';
import drinks from '../../static/drinks.jpg';

const Category = () => {
 
    const StyledCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        borderRadius:'100%',
        overflow:'hidden',
        width:'100px',
        cursor:'pointer',
        [theme.breakpoints.up('md')]:{
            height: 400,
        },
        [theme.breakpoints.down('md')]:{
            height: 200,
        },
        "&:hover":{
            opacity:0.8,
            boxSizing:'border-box',
            zIndex:1,
            transition:`all 0.45s ease`,
        },
      }));
    
      
  const StyledTypography = styled(Typography)({
    textAlign:'center',
    color:'black',
    fontSize:20,
  });

  const CardBox = styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  })

  return (
    <Container>
        <CardBox>
           <StyledCard sx={{backgroundImage:`url(${drinks})`}} />
           <StyledTypography>Drinks</StyledTypography>
        </CardBox>
    </Container>
  )
}

export default Category