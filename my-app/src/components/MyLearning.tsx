import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MyLearningCard from './MyLearningCard';

interface LearningItem {
  title: string;
  author: string;
  progress: number;
  img: string;
}

const myLearning: LearningItem[] = [
  {
    title: "Becoming a Photographer",
    author: "Clara Manning",
    progress: 69,
    img: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba",
  },
  {
    title: "Design Thinking 2.0",
    author: "Chris Kinley",
    progress: 27,
    img: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
  },
];

const MyLearning: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        My Learning
      </Typography>
      <Grid container spacing={2}>
        {myLearning.map((item, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <MyLearningCard item={item} idx={idx} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyLearning;
