import React, { useState } from "react";
import { FC } from "react";
import { Card,CardMedia ,Box,Typography,CardContent,LinearProgress} from "@mui/material";
import { LearningItem } from "../types/courseTypes";
import BookmarkIcon from '@mui/icons-material/Bookmark';
const CourseCard:FC<LearningItem>=({title,author,progress,img,width,sx,onClick})=>{
    const [saved,setSaved]=useState(false);
   
    return(
           <Card 
            onClick={onClick}
           sx={{ 
                        borderRadius: 6,
                        display: 'flex', 
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        height: '150px',
                        width: width||'600px',
                        position: 'relative',
                        overflow: 'hidden',
                        ...sx,
                      }}>
                        <CardMedia
                          component="img"
                          sx={{
                            width: '180px',
                            height: '88%',
                            padding: 1,
                            objectFit: 'cover',
                            borderRadius: '20px',
                          }}
                          image={img}
                          alt={title}
                        /> 
                        <CardContent sx={{ 
                          flex: 1, 
                          padding: '16px',
                          display: 'flex', 
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                          <Typography fontWeight="bold" gutterBottom  sx={{ mb: 1 }}>
                            {title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                            {author}
                          </Typography>
                          <Box sx={{ mt: 'auto' }}>
                            <LinearProgress variant="determinate" value={progress} sx={{ 
                              height: 8, 
                              borderRadius: 4, 
                              width: '100%',
                            }} />
                            <Typography variant="body2" mt={1} display="block" color="text.secondary">
                              {progress}% complete
                            </Typography>
                          </Box>

                        </CardContent>
                         <Box sx={{backgroundColor: 'rgba(28, 116, 204, 0.08)',width:'28px',height:'28px',borderRadius:'40%',position:'absolute',top:8,right:8,display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <BookmarkIcon onClick={()=>setSaved(!saved)} sx={{fontSize: '1.3rem',color:saved===true? 'blue':'grey'}} ></BookmarkIcon>
                  </Box>
                      </Card>
    )

}
export default CourseCard;