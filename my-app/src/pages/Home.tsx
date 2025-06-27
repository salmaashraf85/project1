import React from 'react';
import { Container, Box, Button } from '@mui/material';
import FeaturedCourses from '../components/FeaturedCourses';
import CategoriesSec from '../components/CategoriesSec';
import MyLearning from '../components/MyLearning';

const Home: React.FC = () => (
  <Container maxWidth="xl" sx={{ padding: '24px', minHeight: '100vh' }}>
    <FeaturedCourses />
    <CategoriesSec />
    <MyLearning />
    <Box display="flex" justifyContent="center" mt={2}>
      <Button variant="contained" sx={{ borderRadius: 20, width: '130px' }}>SEE ALL</Button>
    </Box>
  </Container>
);

export default Home;

