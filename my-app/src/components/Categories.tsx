import Checkbox from '@mui/material/Checkbox';
import { FormGroup,FormControlLabel ,Box} from '@mui/material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import { FC } from 'react';
export const  ColorCheckboxes:FC=()=> {
    const categories=['Sales','HR','Drawing','Big Data','Desgin']
  return (
    <Box>
<FormGroup sx={{display:'flex',flexDirection:'row',gap:'30px',marginTop:'10px'}}>
   { categories.map((c)=>(
         
       <FormControlLabel sx={{paddingLeft:'20px'}}control={<Checkbox color="default" sx={{ color: '#e0e0e0'}}/>} label={c} />
  ) )}
  
</FormGroup>
    </Box>
  );
}
