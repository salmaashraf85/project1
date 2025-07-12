import React from 'react';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { myLearning } from '../api/api';
import CourseCard from './CourseCard';

const MyLearning: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  return (
    <Box sx={{ width: '100%', px: 2, mb: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        My Learning
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
          {myLearning.map((c, index) => (
            <Box  sx={{
              flex: {
                xs: '100%', // full width on small screens
                sm: 'calc(50% - 8px)', // two per row with 16px gap on small+
              },
            }}>
            <CourseCard
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                transition: "0.3s",
                cursor: "pointer",
                backgroundColor:
                  selectedIndex === index ? "#e0f3ff" : "#FBFBFB",
                border:
                  selectedIndex === index
                    ? "2px solid #2196f3"
                    : "1px solid transparent",
                boxShadow: selectedIndex === index ? 3 : 0,
                "&:hover": {
                  backgroundColor:
                    selectedIndex === index ? "#e0f3ff" : "#eaeaea",
                  boxShadow: 2,
                },
              }}
              title={c.title}
              author={c.author}
              img={c.img}
              progress={c.progress}
              width={{ sm: "100%", xs: "100%" }}
            />
            </Box>
          ))}
        </Box>
      </Box>
  );
};

export default MyLearning;


















