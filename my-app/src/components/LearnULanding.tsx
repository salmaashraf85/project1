import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const LearnULanding: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '24px',
        mt: '20px',
        mb: '20px',
        px: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          maxWidth: '1200px',
          height: { xs: 'auto', md: '75%' },
          borderRadius: '24px',
          boxShadow: 3,
          backgroundColor: '#f0f0f0',
          overflow: 'hidden',
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' }, 
            p: { xs: 3, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center" mb={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#2E8DFF',
                borderRadius: '24px',
                px: 2,
                py: 0.5,
                color: '#FBFBFB',
                fontWeight: 500,
                fontSize: 14,
                width: '48px',
                height: '32px',
                justifyContent: 'center',
              }}
            >
              <div
                data-quest-tour="a08f79041-1e65-438a-8dd5-03a88932addb"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '48px',
                  height: '32px',
                  padding: '0px',
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
              </div>
            </Box>
            <Typography variant="h6" fontWeight={600} color="#2E8DFF">
              LearnU
            </Typography>
          </Stack>

          <Typography variant="h4" fontWeight={700} gutterBottom>
            Discover passion
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={4}>
            Find out what topics you find interesting,<br />
            learn a new skill & connect with people that<br />
            are passionate about similar topics.
          </Typography>

          <Button
            variant="contained"
            sx={{
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: { xs: '0.7rem', md: '0.875rem' },
              px: { xs: 2, md: 3 },
              py: { xs: 0.5, md: 1 },
              backgroundColor: '#2E8DFF',
              '&:hover': { backgroundColor: '#1C74D4' },
              borderRadius: '16px',
              width: 'fit-content',
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Right Side - Image */}
        <Box
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            p: 0,
            backgroundColor: '#fff',
          }}
        >
          <Box
            component="img"
            src="https://assets.api.uizard.io/api/cdn/stream/a8ce660d-47da-404a-b3b3-63ca6970ddcf.png"
            alt="Landing Visual"
            sx={{
              width: '100%',
              height: '80%',
              objectFit: 'contain',
              borderTopRightRadius: '24px',
              borderBottomRightRadius: '24px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LearnULanding;
