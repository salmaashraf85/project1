// src/pages/Saved.tsx
import { Box,Container,Typography } from '@mui/material';
import { FC } from 'react';
import ImageList from '../components/savedlist';
import React from 'react';
import CourseDetails from '../components/CourseDetails';
import { DetailedItems } from '../api/api';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Saved: FC = () => {
   const item= DetailedItems[1];
  return (
  <Box sx={{margin:{sm:'50px',xs:'30px'},marginTop:'40px'}}>
    <Typography variant='h5' sx={{fontWeight:'bold' ,pb:'25px'}}>Saved Courses</Typography>
      <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},gap:{sm:10,xs:10}}}> 
     <ImageList></ImageList>
    <CourseDetails title={item.title} description={item.description} time={item.time} img={item.img} 
    authorImg={item.authorImg} rating={item.rating} btn1='preview' btn2='buy now' author={item.author} price=''
   overlay={<Box sx={{ display:'flex',flexDirection:'column',position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',background: 'rgba(0, 0, 0, 0.4)', color: 'white',justifyContent: 'center', alignItems: 'center',p: 2,}}>
           <PlayArrowIcon></PlayArrowIcon>
             Play Preveiw        
     </Box>}
     
    ></CourseDetails>   
    </Box>
    </Box>
  )
};

export default Saved;