import { Box,Typography,Avatar,Button ,Container} from "@mui/material";
import { FC } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import { grey } from "@mui/material/colors";
import { DetailedCourse } from "../types/courseTypes";
const CourseDetails: FC<DetailedCourse>=({title,author,time,rating,img,authorImg,description,btn1,btn2,overlay})=>{

return(
    <Container  sx={{backgroundColor:'#FBFBFB'}}>
    <Box sx={{position:'relative',borderRadius: '16px' ,width:'100%', height:'280px',overflow: 'hidden'}}>
    <Box component="img" src={img} alt="img" sx={{width:'100%',height:'100%', objectFit: 'cover',}}/>
    {overlay && (
     <Box> 
    {overlay}
    </Box>
  )}
    </Box>
    <Typography sx={{fontWeight:'bold',fontSize:'20px' ,pt:'12px',color:"#303030"}}>{title}</Typography>
    <Box sx={{borderRadius:'20px', boxShadow: 1,backgroundColor:'#fff',alignItems:'center', width: 'fit-content',display:'flex',flexDirection:'row',gap:'10px',my:1}}>
     <Avatar alt="image" src={authorImg} />
    <Typography sx={{pr:1}}>{author}</Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'row',py:1}}>
    <AccessTimeFilledIcon sx={{fontSize:'20px',color:grey[500]}}></AccessTimeFilledIcon>
    <Typography color="#616161">{time}</Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'row',py:1}}>
    <StarIcon sx={{fontSize:'20px',color:grey[500]}}></StarIcon>
    <Typography color="#616161">{rating}</Typography>
    </Box>
    <Typography sx={{fontWeight:'bold',fontSize:{sm:'20px',xs:'15px'} ,pt:'12px',color:"#303030"}}>Course Description</Typography>
    <Typography color="#616161" sx={{fontSize:{xs:'13px',sm:'15px'}}}>{description}</Typography>
    <Button variant="outlined" sx={{mr:2,width:{sm:'48%',xs:'100%'},my:{sm:'30px',xs:'10px'},color:'#2E8DFF',textTransform: 'uppercase',fontWeight: 600,fontSize: { xs: '0.7rem', md: '0.875rem' },borderRadius: '10px', height:'40px'  }} >{btn1}</Button>
    <Button variant="contained" sx={{width:{sm:'48%',xs:'100%'},my:{sm:'30px',xs:'10px'},textTransform: 'uppercase',fontWeight: 600,fontSize: { xs: '0.7rem', md: '0.875rem' },backgroundColor: '#2E8DFF','&:hover': { backgroundColor: '#1C74D4' },borderRadius: '10px', height:'40px'  }} >{btn2}</Button>
</Container>
)  
};
export default CourseDetails;


