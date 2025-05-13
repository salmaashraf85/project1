import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import {Stack} from '@mui/material';
const ImageList: FC = () => {
    return (
   <Stack spacing={2} direction="row">
    <Box sx={{display:'flex',flexDirection:'column',py:'20px'}}>
       <Box component="img" src="https://images.unsplash.com/photo-1569098644956-02996eb711b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw4MHx8dXh8ZW58MXx8fHwxNjczMDE4Nzcy&ixlib=rb-4.0.3&q=80&w=1080 " alt="img" sx={{ borderRadius: '16px' ,width:'200px', height:'140px'}} />
       <Typography sx={{fontWeight:'bold',fontSize:'15px' ,pt:'6px'}}>UX Research</Typography>
       <Typography sx={{fontSize:'12px',color:'gray'}}>Chris Kinely</Typography>
    </Box>
     <Box sx={{display:'flex',flexDirection:'column',py:'20px'}}>
        <Box component="img" src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHx1eCUyMGRlc2lnbiUyMHxlbnwxfHx8fDE2NzMwMTc0MDg&ixlib=rb-4.0.3&q=80&w=1080" alt="img" sx={{ borderRadius: '16px' ,width:'200px', height:'140px'}} />
       <Typography sx={{fontWeight:'bold',fontSize:'15px' ,pt:'6px'}}>UX Esential</Typography>
       <Typography sx={{fontSize:'12px',color:'gray'}}>Don Draple</Typography>
    </Box>
     <Box sx={{display:'flex',flexDirection:'column',py:'20px'}}>
        <Box component="img" src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw0fHx1eCUyMGRlc2lnbnxlbnwxfHx8fDE2NzMwMTkwOTQ&ixlib=rb-4.0.3&q=80&w=1080" alt="img" sx={{ borderRadius: '16px' ,width:'200px', height:'140px'}} />
       <Typography sx={{fontWeight:'bold',fontSize:'15px' ,pt:'6px'}}>UX for Beginners</Typography>
       <Typography sx={{fontSize:'12px',color:'gray'}}>Ben Starter</Typography>
    </Box>
     <Box sx={{display:'flex',flexDirection:'column',py:'20px'}}>
        <Box component="img" src="https://images.unsplash.com/photo-1547027072-332f09bd6bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw0Mnx8dXglMjBkZXNpZ258ZW58MXx8fHwxNjczMDE5MTc5&ixlib=rb-4.0.3&q=80&w=1080" alt="img" sx={{ borderRadius: '16px' ,width:'200px', height:'140px'}} />
       <Typography sx={{fontWeight:'bold',fontSize:'15px' ,pt:'6px'}}>How to UX? </Typography>
       <Typography sx={{fontSize:'12px',color:'gray'}}>Anna May</Typography>
    </Box>

   </Stack>
  )
};

export default ImageList;