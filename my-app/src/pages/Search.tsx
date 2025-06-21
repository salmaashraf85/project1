import { Box ,Divider,Typography} from '@mui/material';
import { FC,useState } from 'react';
import SearchInputBox from '../components/common/searchBox';
import {Button} from '@mui/material';
import { CategoryButtons} from '../components/TopSearches';
import {ColorCheckboxes} from '../components/Categories'
import {Rating} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Levels from '../components/Levels';
import ImageList from '../components/ImageList';
const Search: FC = () => {
    const [selected, setSelected] = useState('UX Design');
  return (
   <Box sx={{marginLeft:'60px',marginTop:'40px'}}>
    <Typography variant='h4' sx={{fontWeight:'bold'}}>Find your favourites</Typography>
    <Box sx={{display:'flex',flexDirection:'row',gap:'15px',marginTop:'40px',borderBottom:' 1px #424242'}}>
    <SearchInputBox ></SearchInputBox>
    
     <Button variant="contained" sx={{textTransform: 'uppercase',fontWeight: 600,fontSize: { xs: '0.7rem', md: '0.875rem' },backgroundColor: '#2E8DFF','&:hover': { backgroundColor: '#1C74D4' },borderRadius: '10px',width: 'fit-content', height:'40px'  }} >
          Search
     </Button>

    </Box>
    <Divider sx={{ mb:1,mt:5}} />
  <Typography sx={{fontWeight:'bolder',color:'#424242',fontSize:'13px'}}>TOP SEARCHES</Typography>
  <CategoryButtons Selected={selected }onSelect={setSelected} ></CategoryButtons>
   <Divider sx={{ mb:1,mt:5}} />
   <Typography sx={{fontWeight:'bold',color:'#424242',fontSize:'13px'}}>CATEGORIES</Typography>
   <ColorCheckboxes></ColorCheckboxes>
    <Divider sx={{ mb:1,mt:5}} />
    <Box sx={{display:'flex',flexDirection:'row',gap:'300px'}}>
      <Box>
    <Typography sx={{fontWeight:'bold',color:'#424242',fontSize:'13px',pb:'18px'}}>RATING</Typography>
    <Rating name="size-small" emptyIcon={<StarIcon style={{ opacity: 0.8 }} />} defaultValue={3} size="medium" sx={{color:'blue' }} />
     </Box>
     <Box>
   <Typography sx={{fontWeight:'bold',color:'#424242',fontSize:'13px'}}>LEVEL</Typography>
   <Levels></Levels>
     </Box>
     </Box>
     <Divider sx={{ mb:1,mt:5}} />
     <Typography  sx={{fontWeight:'bold',color:'#424242',fontSize:'13px',textTransform: 'uppercase'}}>
      recommended for you 
     </Typography>
     <ImageList></ImageList>
  </Box>
  )
};

export default Search;