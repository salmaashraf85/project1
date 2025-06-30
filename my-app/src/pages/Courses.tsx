// src/pages/Courses.tsx
import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';
import React from 'react';
import CourseCard from '../components/CourseCard';
import { courseItems, DetailedItems } from '../api/api';
import CourseDetails from '../components/CourseDetails';
import BarChartIcon from '@mui/icons-material/BarChart';
const Courses: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const item = DetailedItems[0];
  return (
    <Box sx={{ margin: { sm: '50px', xs: '30px' }, marginTop: '40px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' ,gap:{sm:33,xs:10},alignItems:'center', pb: '25px'}}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          My Learning
        </Typography>
       <Box sx={{ display: 'flex', flexDirection: 'row',color:"text.secondary"}}><BarChartIcon></BarChartIcon> Statistics</Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: { sm: 10, xs: 10 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {courseItems.map((c, index) => (
            <CourseCard
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{transition: '0.3s', cursor: 'pointer', backgroundColor: selectedIndex === index ? '#e0f3ff' : '#FBFBFB', border: selectedIndex === index ? '2px solid #2196f3' : '1px solid transparent',boxShadow: selectedIndex === index ? 3 : 0,
                '&:hover': {
                  backgroundColor: selectedIndex === index ? '#e0f3ff' : '#eaeaea',
                  boxShadow: 2,
                },
              }}
              title={c.title} author={c.author} img={c.img} progress={c.progress} width={{ sm: '500px', xs: '100%' }}
            />
          ))}
        </Box>
        <Box>
          <CourseDetails title={item.title} description={item.description} time={item.time} img={item.img} authorImg={item.authorImg} rating={item.rating} btn1="Review Course" btn2="Continue Learning" author={item.author}  price=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
