
import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import ProfileInfo from '../components/ProfileInfo';
import TotalStatistics from '../components/TotalStatistics';
import Achievements from '../components/Achievements';
import FriendsSection from '../components/FriendsSection';

const Profile: FC = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        px: 0,
        pt: 3,
        pd: 3,
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          {/* LEFT SIDE: Profile info, statistics, achievements */}
          <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 3 , ml: { xs: 0, md: -10 } , mr: { xs: 0, md: 10 } }}>
            <ProfileInfo />
            <TotalStatistics />
            <Achievements />
          </Box>

          {/* RIGHT SIDE: Friends section */}
          <Box sx={{ flex: 1 }}>
            <FriendsSection />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;

