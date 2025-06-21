import { Box, Typography,Stack,Button } from '@mui/material';
import { FC } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
const courses = [
  {
    title: "TypeFace Design",
    author: "Gary Saltz",
    img: "https://assets.api.uizard.io/api/cdn/stream/8a82fb6d-e077-4930-b16d-a47ec1537f4a.jpg"
  },
  {
    title: "Building iOS15 App",
    author: "Tom Colins",
    img: "https://assets.api.uizard.io/api/cdn/stream/c4abf0fb-78c0-4ced-9b10-ce75c6350a1c.jpg"
  },
  {
    title: "Excel:Formulas and functions",
    author: "Mike Curtis",
    img: "https://assets.api.uizard.io/api/cdn/stream/6b7ace23-9ec2-4b4e-963f-c0097a8bba79.jpg"
  }
];
const ImageList: FC = () => {
const [selectedIndex, setSelectedIndex] = useState<number>(1)
 return (
  <Stack direction="column" spacing={2}> 
   { courses.map((c,index) =>(
     <Box key={index}
     onClick={() => setSelectedIndex(index)}
     sx={{ cursor: 'pointer',display:'flex',flexDirection:{sm:'row',sx:'col'},position:'relative',borderRadius:3,width: {sm:'500px',xs:'100%'}, transition: '0.3s',backgroundColor: selectedIndex === index ? '#e0f3ff' : '#FBFBFB',border: selectedIndex === index ? '2px solid #2196f3' : '1px solid transparent',boxShadow: selectedIndex === index ? 3 : 0,'&:hover': {backgroundColor: selectedIndex === index ? '#e0f3ff' : '#eaeaea',boxShadow: 4 }}}>
     <Box component="img" src={c.img} alt="img" sx={{ borderRadius: '16px' ,width:'140px', height:'120px'}} />
     <Box sx={{display:'flex',flexDirection:'column',pl:'20px',pr:'40px', flexGrow: 1,}}>
        <Typography sx={{fontWeight:'bold',fontSize:'15px' ,pt:'6px'}}>{c.title}</Typography>
       <Typography sx={{fontSize:'12px',color:'gray'}}>{c.author}</Typography>
       <Button variant="contained" sx={{mt:'20px',textTransform: 'uppercase',fontWeight: 600,fontSize: { xs: '0.7rem', md: '0.875rem' },backgroundColor: '#2E8DFF','&:hover': { backgroundColor: '#1C74D4' },borderRadius: '10px',width: 'fit-content', height:'20px'  }} >Buy</Button>
     </Box>
     <BookmarkIcon color='primary'sx={{fontSize: '1.4rem',position:'absolute',top:8,right:8}}></BookmarkIcon>
     </Box>   
    ))
 }
  </Stack>
 )
};
export default ImageList;