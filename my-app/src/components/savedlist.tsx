import { Box, Typography,Stack,Button } from '@mui/material';
import { FC } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
import { courses } from '../api/api';
const ImageList: FC = () => {
const [selectedIndex, setSelectedIndex] = useState<number>(1)
 return (
  <Stack direction="column" spacing={2}> 
   { courses.map((c,index) =>(
     <Box key={index}
     onClick={() => setSelectedIndex(index)}
     sx={{p:1, cursor: 'pointer',display:'flex',flexDirection:'row',position:'relative',borderRadius:5,width: {sm:'500px',xs:'100%'} ,transition: '0.3s',backgroundColor: selectedIndex === index ? '#e0f3ff' : '#FBFBFB',border: selectedIndex === index ? '2px solid #2196f3' : '1px solid transparent',boxShadow: selectedIndex === index ? 3 : 0,'&:hover': {backgroundColor: selectedIndex === index ? '#e0f3ff' : '#eaeaea',boxShadow: 2}}}>
     <Box component="img" src={c.img} alt="img" sx={{ borderRadius: '14px' ,width:'140px', height:'120px'}} />
     <Box sx={{display:'flex',flexDirection:'column',pl:'20px',pr:'40px', flexGrow: 1,}}>
        <Typography sx={{fontWeight:'bold',fontSize:'15px' ,pt:'6px'}}>{c.title}</Typography>
       <Typography sx={{fontSize:'12px',color:'gray'}}>{c.author}</Typography>
       <Button variant="contained" sx={{mt:'20px',textTransform: 'uppercase',fontWeight: 600,fontSize: { xs: '0.7rem', md: '0.875rem' },backgroundColor: '#2E8DFF','&:hover': { backgroundColor: '#1C74D4' },borderRadius: '10px',width: 'fit-content', height:'20px'  }} >Buy</Button>
     </Box>
     <Box sx={{backgroundColor: 'rgba(28, 116, 204, 0.08)',width:'28px',height:'28px',borderRadius:'40%',position:'absolute',top:8,right:8,display:'flex',justifyContent:'center',alignItems:'center'}}>
           <BookmarkIcon color='primary'sx={{fontSize: '1.3rem'}}></BookmarkIcon>
     </Box>
     </Box>   
    ))
 }
  </Stack>
 )
};
export default ImageList;