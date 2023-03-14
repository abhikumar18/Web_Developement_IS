import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PostsCard from '../../components/posts/PostsCard';

const Posts = () => {
  return (
    <Box>
        <Typography variant='h4' align='center'>{" "}Latest Recipes{" "}</Typography>
        <Grid conatiner columnSpacing={{xs:0,sm:1,md:1}} direction={'column'}>
            <Grid item xs>
                <PostsCard myDirection={'flex'}/>
            </Grid>

            <Grid item xs>
                <PostsCard myDirection={'flex'}/>
            </Grid>

            <Grid item xs>
               <PostsCard myDirection={'flex'}/>
            </Grid>
        </Grid>
        <Typography
          variant='h4'
          bgcolor={'black'}
          color='white'
          align='center'
          mt={4}
          mb={4}
        >
          Most Popular
        </Typography>

        <Grid conatiner columnSpacing={{xs:0,sm:1,md:1}} direction={'row'}>
            <Grid item md={6} sm={6}>
                <PostsCard myDirection={'block'}/>
            </Grid>

            <Grid item md={6} sm={6}>
                <PostsCard myDirection={'block'}/>
            </Grid>

            <Grid item md={6} sm={6}>
               <PostsCard myDirection={'block'}/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Posts;