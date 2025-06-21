// src/pages/Saved.tsx
import { Box,Container,Typography } from '@mui/material';
import { FC } from 'react';
import ImageList from '../components/savedlist';
import React from 'react';
import CourseDetails from '../components/CourseDetails';

const Saved: FC = () => {
  return (
    <Container  sx={{backgroundColor:'#F5F5F5'}}>
  <Box sx={{marginTop:'40px'}}>
    <Typography variant='h5' sx={{fontWeight:'bold' ,pb:'25px'}}>Saved Courses</Typography>
      <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},gap:{sm:10,xs:10}}}> 
     <ImageList></ImageList>
    <CourseDetails></CourseDetails>   
    </Box>
    </Box>
    </Container>
  )
};

export default Saved;