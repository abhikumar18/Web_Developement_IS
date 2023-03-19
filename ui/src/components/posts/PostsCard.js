import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import burger from '../../static/burger1.jpg';

const PostsCard = ({myDirection}) => {
  return (
        <Box mt={3}>
           <Link href="http://localhost:3000/details" sx={{textDecoration:'none'}}>
              <Card>
                 <Box 
                     sx={{
                     display:{
                        xs:'block',
                        sm:`${myDirection}`,
                        md:`${myDirection}`,
                     },
                        flexDirection:'row',}}>
                    <CardMedia component={'img'} height='300' image={burger} alt='burger_image' 
                    sx={{width:'400px',cursor:'pointer','&:hover':{
                     opacity:0.8,
                     boxSizing:'border-box',
                     zIndex:1,
                     transition:`all 0.50s ease`
                    }}}/>
                    <CardContent>
                       <Typography gutterBottom variant='h4' align='center'>Yummy burger{" "}</Typography>
                       <Typography variant='h5' color='text.secondary'>
                          Lizards are a widespread group of squamate reptiles,with over
                          6,000 species, ranging across all countries except Antartica
                       </Typography>
                       <CardActions>
                           <Button sx={{color:'tomato'}} size='large'>
                              Share
                           </Button>

                           <Button sx={{color:'tomato'}} size='large'>
                              Learn More
                           </Button>
                       </CardActions>
                    </CardContent>
                 </Box>
              </Card>
           </Link>
        </Box>
  )
}

export default PostsCard;