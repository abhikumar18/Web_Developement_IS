import { styled } from "@mui/material/styles"; 
import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import burger from '../../static/burger1.jpg';
import meat from '../../static/meat.jpg';
import appetizer from '../../static/appetizer.jpg';
import drinks from '../../static/drinks.jpg';
import Category from '../categoryList/Category'

const Hero = () => {

  const StyledCard = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
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
    color:'white',
    backgroundColor:'tomato',
    fontSize:20,
  });

  const Styledwrapper = styled(Box)(({theme})=>({
    [theme.breakpoints.up("md")]:{
        paddingTop:'140%',
    },
    [theme.breakpoints.down("md")]:{
        paddingTop:'40%',
    },
    width:"80%",
  }));

  return (
    <Container>
        <Grid container direction={'row'} columnSpacing={2} rowSpacing={2}>
            <Grid item md={3} xs={6}>
                <StyledCard sx={{  backgroundImage:`url(${meat})` }}>
                    <Styledwrapper>
                        <StyledTypography>Meat</StyledTypography>
                    </Styledwrapper>
                </StyledCard>
            </Grid>

            <Grid item md={3} xs={6}>
                <StyledCard sx={{  backgroundImage:`url(${burger})` }}>
                <Styledwrapper>
                        <StyledTypography>Burger</StyledTypography>
                    </Styledwrapper>
                </StyledCard>
            </Grid>

            <Grid item md={3} xs={6}>
                <StyledCard sx={{  backgroundImage:`url(${appetizer})` }}>
                <Styledwrapper>
                        <StyledTypography>Appetizer</StyledTypography>
                    </Styledwrapper>
                </StyledCard>
            </Grid>

            <Grid item md={3} xs={6}>
                <StyledCard sx={{  backgroundImage:`url(${drinks})` }}>
                <Styledwrapper>
                        <StyledTypography>Drinks</StyledTypography>
                    </Styledwrapper>
                </StyledCard>
            </Grid>
           
        </Grid>
        <Category />
    </Container>
  )
}

export default Hero;