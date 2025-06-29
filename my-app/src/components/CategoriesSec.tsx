

import React from 'react';
import { Box, Typography } from '@mui/material';

const categories: string[] = [
  'Sales', 'HR', 'Drawing', 'Big Data', 'Design', 'Marketing', 'Astronomy'
];

const CategoriesSec: React.FC = () => {
  return (
    <Box sx={{ width: '100%', px: 2, mb: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Categories
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        width: '100%',
        justifyContent: 'flex-start',
      }}>
        {categories.map((cat, idx) => {
          const isBlueCategory = ['HR', 'Drawing', 'Big Data'].includes(cat);

          const getIcon = () => {
            switch (cat) {
              case 'Sales':
                return (
                  <svg viewBox="0 0 496 512" style={{ width: 24, height: 24, fill: isBlueCategory ? '#1976d2' : '#b1b1b1' }}>
                    <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
                  </svg>

                  
                );
              case 'HR':
                return (
                  <svg viewBox="0 0 640 512" style={{ width: 24, height: 24, fill: isBlueCategory ? '#1976d2' : '#b1b1b1' }}>
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
                  </svg>

                );
              case 'Drawing':
                return (  
                  <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: isBlueCategory ? '#1976d2' : '#b1b1b1' }}>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"/>
                  </svg>
                );
              case 'Big Data':
                return (
                  <svg viewBox="0 0 512 512" style={{ width: 24, height: 24, fill: isBlueCategory ? '#1976d2' : '#b1b1b1' }}>
                    <path d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z"/>
                  </svg>
                );
              case 'Design':
                return (
                   <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: '#b1b1b1' }}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="m16.24 11.51 1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zm3.65-11.92a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    </svg>

                );
              case 'Marketing':
                return (
                  <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: isBlueCategory ? '#1976d2' : '#b1b1b1' }}>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                  </svg>

                );
              case 'Astronomy':
                return (
                  <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: isBlueCategory ? '#1976d2' : '#b1b1b1' }}>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
                  </svg>
                );
              
              default:
                return null;
            }
          };

          return (
            <Box
              key={idx}
              sx={{
                px: 3,
                py: 2,
                fontWeight: 'bold',
                borderRadius: 6,
                backgroundColor: isBlueCategory ? 'rgba(25, 118, 210, 0.1)' : 'white',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                fontSize: '0.875rem',
                border: isBlueCategory ? '2px solid rgba(25, 118, 210, 0.3)' : 'none',
                color: isBlueCategory ? '#1976d2' : 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                minWidth: '120px',
                height: '70px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: isBlueCategory ? 'rgba(25, 118, 210, 0.2)' : 'white',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
                  ...(isBlueCategory && {
                    borderColor: 'rgba(25, 118, 210, 0.5)',
                    color: '#1565c0'
                  })
                }
              }}
            >
              <Box sx={{ mb: 1 }}>{getIcon()}</Box>
              <Typography variant="body2" fontWeight="bold">
                {cat}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CategoriesSec;
