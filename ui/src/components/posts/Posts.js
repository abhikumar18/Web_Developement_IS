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
                <PostsCard />
            </Grid>

            <Grid item xs>
                <PostsCard />
            </Grid>

            <Grid item xs>
               <PostsCard />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Posts;