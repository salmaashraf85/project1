import { Drawer, List, ListItemButton, ListItemIcon,ListItemText,ListItem,Box} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
    const navLinkStyles = {
        flexDirection: 'column',
        alignItems: 'center',
        px: 0,
        py: 1.5,
        '&.active': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            color: 'primary.main',
        
            '& .MuiListItemIcon-root': {
              color: 'primary.main',
            },
        
            '& .MuiTypography-root': {
              color: 'primary.main',
            
            },
          },
    }

  return (
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          width: 60,
          marginTop: '20px' ,
          marginLeft:'5px',
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          backgroundColor: '#ffffff',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          border: 'none',
        },
      }}
    >
      <List>
    
          <Box
                data-quest-tour="a08f79041-1e65-438a-8dd5-03a88932addb"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '32px',
                  margin: '20px',
                  cursor: 'inherit',
                  overflow: 'hidden',
                  opacity: 1,
                  backgroundColor: '#2E8DFF',
                  borderRadius: '24px',
                  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 0px',
                  border: '0px',
                  
                }}
              >
                <svg
                  viewBox="0 0 576 512"
                  style={{ width: '14px', height: '14px', fill: '#FBFBFB' }}
                >
                  <path d="M575.81 217.98C572.64 157.41 518.28 112 457.63 112h-9.37c-52.82 0-104.25-16.25-147.74-46.24-41.99-28.96-96.04-41.62-153.21-28.7C129.3 41.12-.08 78.24 0 224c.04 70.95 38.68 132.8 95.99 166.01V464c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-54.26c15.36 3.96 31.4 6.26 48 6.26 5.44 0 10.68-.73 16-1.18V464c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-59.43c14.24-5.06 27.88-11.39 40.34-19.51C342.07 355.25 393.86 336 448.46 336c25.48 0 16.01-.31 23.05-.78l74.41 136.44c2.86 5.23 8.3 8.34 14.05 8.34 1.31 0 2.64-.16 3.95-.5 7.09-1.8 12.05-8.19 12.05-15.5 0 0 .14-240.24-.16-246.02zM463.97 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm80 153.25l-39.86-73.08c15.12-5.83 28.73-14.6 39.86-25.98v99.06z"></path>
                </svg>
              </Box>  
       
    {/* Home Item */}
    <ListItemButton 
    component={NavLink}
    to="/main/home"
    sx={navLinkStyles}
        >
          <ListItemIcon sx={{ 
            minWidth: 'auto',
            mb: 0.5 ,
            color: "rgb(155, 153, 153)"
          }}>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText 
            primary="Home" 
            sx={{ 
              textAlign: 'center',
              mt: 0,
              '& .MuiTypography-root': {
                fontSize: '0.7rem',
                lineHeight: 1.2
              }
            }}
          />
        </ListItemButton>

          
      <ListItemButton 
    component={NavLink}
    to="/main/search"
    sx={navLinkStyles}
        >
          <ListItemIcon sx={{ 
            minWidth: 'auto',
            mb: 0.5 ,
            color: "rgb(155, 153, 153)"
          }}>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Search" 
            sx={{ 
              textAlign: 'center',
              mt: 0,
              '& .MuiTypography-root': {
                fontSize: '0.7rem',
                lineHeight: 1.2
              }
            }}
          />
        </ListItemButton>
           
           <ListItemButton 
    component={NavLink}
    to="/main/courses"
    sx={navLinkStyles}
        >
          <ListItemIcon sx={{ 
            minWidth: 'auto',
            mb: 0.5 
            ,color: "rgb(155, 153, 153)"
          }}>
            <PlayCircleIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Courses" 
            sx={{ 
              textAlign: 'center',
              mt: 0,
              '& .MuiTypography-root': {
                fontSize: '0.7rem',
                lineHeight: 1.2
              }
            }}
          />
        </ListItemButton>


                  
                  <ListItemButton 
    component={NavLink}
    to="/main/saved"
    sx={navLinkStyles}
        >
          <ListItemIcon sx={{ 
            minWidth: 'auto',
            mb: 0.5 
            ,color: "rgb(155, 153, 153)"
          }}>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Saved" 
            sx={{ 
              textAlign: 'center',
              mt: 0,
              '& .MuiTypography-root': {
                fontSize: '0.7rem',
                lineHeight: 1.2
              }
            }}
          />
        </ListItemButton>

                  
                   <ListItemButton 
    component={NavLink}
    to="/main/profile"
    sx={navLinkStyles}
        >
          <ListItemIcon sx={{ 
            minWidth: 'auto',
            mb: 0.5 
            ,color: "rgb(155, 153, 153)"
          }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Profile" 
            sx={{ 
              textAlign: 'center',
              mt: 0,
              '& .MuiTypography-root': {
                fontSize: '0.7rem',
                lineHeight: 1.2
              }
            }}
          />
        </ListItemButton>

      </List>
    </Drawer>
  );
}