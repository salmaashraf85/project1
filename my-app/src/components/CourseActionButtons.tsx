import React, { useState } from "react";
import { FC } from "react";
import { Box,Button } from "@mui/material";
const CourseActionsButtons:React.FC <ButtonProps>= ({isPreviwed,setIsPreviewd,btnName1,btnName2}) =>{

    return(
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
  <Button
  onClick={() => {{
    if(setIsPreviewd)
      setIsPreviewd(!isPreviwed);
  }
    }}
    variant="outlined"
    sx={{
      width: { sm: '24%', xs: '100%' },
      color: '#2E8DFF',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: { xs: '0.7rem', md: '0.875rem' },
      borderRadius: '10px',
      height: '40px',
      display:isPreviwed?'none':"block"
    }}
  >
    {btnName1}
  </Button>

  <Button
    variant="contained"
    sx={{
      width: { sm: isPreviwed?'42%':'24%', xs: '100%' },
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: { xs: '0.7rem', md: '0.875rem' },
      backgroundColor: '#2E8DFF',
      '&:hover': { backgroundColor: '#1C74D4' },
      borderRadius: '10px',
      height: '40px'
    }}
  >
   {btnName2}
  </Button>
</Box>
    )

}
export default CourseActionsButtons;