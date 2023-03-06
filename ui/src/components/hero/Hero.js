import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import burger from '../../static/burger1.jpg';

const Hero = () => {

  const StyledCard = styled(Box)({
    display:'flex',
    justifyContent:'center',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    height:400,
  });

  return (
    <Container>
        <Grid container direction={'column'}>
            <Grid item>
                <StyledCard sx={{backgroundImage:`url(${burger})`}}></StyledCard>
            </Grid>
            <Grid item>test1</Grid>
        </Grid>
    </Container>
  )
}

export default Hero