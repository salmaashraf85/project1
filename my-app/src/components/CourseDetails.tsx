import { Box,Typography,Avatar,Button ,Container} from "@mui/material";
import { FC } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import { grey } from "@mui/material/colors";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const CourseDetails: FC=()=>{

return(
    <Container  sx={{backgroundColor:'#FBFBFB'}}>
    <Box sx={{position:'relative',borderRadius: '16px' ,width:'100%', height:'280px',overflow: 'hidden'}}>
    <Box component="img" src="https://assets.api.uizard.io/api/cdn/stream/c4abf0fb-78c0-4ced-9b10-ce75c6350a1c.jpg" alt="img" sx={{width:'100%',height:'100%', objectFit: 'cover',}}/>
    <Box sx={{ display:'flex',flexDirection:'column',position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',background: 'rgba(0, 0, 0, 0.4)', color: 'white',justifyContent: 'center', alignItems: 'center',p: 2,}}>
           <PlayArrowIcon></PlayArrowIcon>
            Play Preveiw        
    </Box>
    </Box>
    <Typography sx={{fontWeight:'bold',fontSize:'20px' ,pt:'12px',color:"#303030"}}>Building iOS15 App</Typography>
    <Box sx={{borderRadius:'16px', boxShadow: 1,backgroundColor:'#fff',alignItems:'center',width:'140px',display:'flex',flexDirection:'row',gap:'10px',my:1}}>
     <Avatar alt="image" src="https://assets.api.uizard.io/api/cdn/stream/106a750d-2bad-4c6c-bd08-6d8a6c8f7cae.jpg" />
    <Typography>Tom Collins</Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'row',py:1}}>
    <AccessTimeFilledIcon sx={{fontSize:'20px',color:grey[500]}}></AccessTimeFilledIcon>
    <Typography color="#616161">1h 13m</Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'row',py:1}}>
    <StarIcon sx={{fontSize:'20px',color:grey[500]}}></StarIcon>
    <Typography color="#616161">5.0/5.0</Typography>
    </Box>
    <Typography sx={{fontWeight:'bold',fontSize:{sm:'20px',xs:'15px'} ,pt:'12px',color:"#303030"}}>Course Description</Typography>
    <Typography color="#616161" sx={{fontSize:{xs:'13px',sm:'15px'}}}>In this course you will learn how to build iOS app. We will go through the whole process beginning with first line of code,managing the user interface storyboard and creating logic</Typography>
    <Button variant="outlined" sx={{mr:2,width:{sm:'48%',xs:'100%'},my:{sm:'30px',xs:'10px'},color:'#2E8DFF',textTransform: 'uppercase',fontWeight: 600,fontSize: { xs: '0.7rem', md: '0.875rem' },borderRadius: '10px', height:'40px'  }} >Preveiw</Button>
    <Button variant="contained" sx={{width:{sm:'48%',xs:'100%'},my:{sm:'30px',xs:'10px'},textTransform: 'uppercase',fontWeight: 600,fontSize: { xs: '0.7rem', md: '0.875rem' },backgroundColor: '#2E8DFF','&:hover': { backgroundColor: '#1C74D4' },borderRadius: '10px', height:'40px'  }} >Buy Now</Button>
</Container>
)  
};
export default CourseDetails;