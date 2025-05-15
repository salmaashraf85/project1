import Checkbox from '@mui/material/Checkbox';
import { FormGroup,FormControlLabel ,Box} from '@mui/material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Levels() {
    
    const categories=['Beginner','Intermediate','Professional'];
  return (
    <Box>
<FormGroup sx={{display:'flex',flexDirection:'row',gap:'30px',marginTop:'10px'}}>
   { categories.map((c)=>(
       <FormControlLabel control={<Checkbox color="default" sx={{ color: '#e0e0e0'}}/>} label={c} />
  ) )}
  
</FormGroup>
    </Box>
  );
}
