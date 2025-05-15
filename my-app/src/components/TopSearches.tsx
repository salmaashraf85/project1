import { FC } from 'react';
import  {Button, Stack } from '@mui/material';
type categoryProps={
    Selected:string,
    onSelect:(category:string)=>void
}
export const  CategoryButtons:  FC<categoryProps> = ({
  Selected,
  onSelect
})  => {
    const Categories=['Marketing Strategy','UX Design', 'Excel','Adobe Photoshop','CRM','Photography','content Making'];

    return (      
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap"sx={{ mt: 2 }}>
       {Categories.map((c)=>(
        <Button 
          variant="outlined"
          onClick={() => onSelect(c)}
        sx={{    
            borderRadius: '999px',              
            textTransform: 'none',         
            fontWeight: Selected === c ? 'bold' : 'normal',
            color: Selected === c ? '#1E88E5' : '#000',       
            borderColor: Selected === c ? '#90CAF9' : '#E0E0E0', 
            backgroundColor: Selected === c ? '#E3F2FD' : '#fff',                   
            '&:hover': {
              backgroundColor: Selected === c ? '#BBDEFB' : '#f5f5f5',
              borderColor: '#90CAF9',
            },
            px: 3,   
            py: 1   
        }}>
            {c}
        </Button>
       )
       )}

    </Stack>
    );
}