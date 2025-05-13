import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInputBox = () => {
  return (
    <TextField
      placeholder= "Search categories"
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
      }}  
         sx={{
           width: 450, 
        borderRadius: '999px',
        backgroundColor: '#f9f9f9',
        '& .MuiOutlinedInput-root': {
          borderRadius: '999px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#e0e0e0',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#bdbdbd',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#9e9e9e',
        },
      }}
    />
  );
};

export default SearchInputBox;