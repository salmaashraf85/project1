// src/pages/Saved.tsx
import { Box,Container,Typography } from '@mui/material';
import { FC } from 'react';
import ImageList from '../components/savedlist';
import React from 'react';
import CourseDetails from '../components/CourseDetails';

const Saved: FC = () => {
  return (
  <Box sx={{margin:{sm:'50px',xs:'30px'},marginTop:'40px'}}>
    <Typography variant='h5' sx={{fontWeight:'bold' ,pb:'25px'}}>Saved Courses</Typography>
      <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},gap:{sm:10,xs:10}}}> 
     <ImageList></ImageList>
    <CourseDetails></CourseDetails>   
    </Box>
    </Box>
   
  )
};

export default Saved;