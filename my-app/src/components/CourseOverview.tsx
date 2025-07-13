import { Box, Typography,List,ListItem } from '@mui/material';
import { FC } from 'react';
import { useState } from 'react';
import { DetailedItems } from '../api/api';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const CourseOverview: FC = () => {
    const topic=DetailedItems[1]?.topics;
    const Keys = topic ? Object.keys(topic) : []; 
 return (
  <Box>
    <Typography variant='h5' sx={{fontWeight:'bold' ,pb:'25px'}}>Course Overview</Typography>
    <List sx={{ width: 500, maxWidth: 500, bgcolor: 'background.paper' }}>
        {Keys.map((x)=>(        
       <ListItem>
        <Box sx={{width:'700px',height:'80px',display:'flex',flexDirection:'row', justifyContent: 'space-between',borderRadius:2}}>
           <Box sx={{display:'flex',flexDirection:'column'}}>
             <Typography fontWeight="bold" fontSize="18px">{x}</Typography>
             <Typography color='grey'>
                {topic?.[x]}
                {topic?.[x]===1 ? " video": " videos"}
             </Typography>
           </Box>
           <ArrowForwardIosIcon fontSize='small' sx={{color:'grey'}}></ArrowForwardIosIcon>
        </Box>
       
     </ListItem>
        ))
       }
    </List>
  </Box>
  
 )
};
export default CourseOverview;