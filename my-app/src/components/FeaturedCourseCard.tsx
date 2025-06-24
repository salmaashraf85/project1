import React from 'react';
import { Card, CardMedia, CardContent, Typography, Avatar, Button, Rating, Box } from '@mui/material';
import SaveIcon from './SaveIcon';

interface Course {
  title: string;
  author: string;
  time: string;
  rating: number;
  price: string;
  img: string;
  authorImg: string;
}

interface Props {
  course: Course;
  idx: number;
}

const FeaturedCourseCard: React.FC<Props> = ({ course, idx }) => (
  <Card sx={{ borderRadius: 6, position: 'relative', width: '307px', height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ position: 'relative', paddingTop: '40%', margin: '12px 12px 0 12px', borderRadius: '8px', overflow: 'hidden' }}>
      <CardMedia component="img" image={course.img} alt={course.title} sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
      <SaveIcon idx={idx} />
    </Box>
    <CardContent sx={{ padding: '0px 20px', flexGrow: 1 }}>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '20px', padding: '2px 4px', position: 'relative', top: '-30px', maxWidth: '140px' }}>
        <Avatar src={course.authorImg} sx={{ width: 35, height: 35, mr: 0.5 }} />
        <Typography variant="body1" fontWeight="bold" fontSize="0.9rem" noWrap>{course.author}</Typography>
      </Box>
      <Typography fontWeight="bold">{course.title}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="caption" sx={{ mr: 3 }}>{course.time}</Typography>
          <Rating value={course.rating} precision={0.1} size="small" readOnly sx={{ '& .MuiRating-icon': { fontSize: '14px' } }} />
          <Typography variant="caption" sx={{ ml: 1 }}>{course.rating.toFixed(1)}/5</Typography>
        </Box>
        <Button variant="contained" size="small" sx={{ borderRadius: '15px', height: '30px', fontSize: '0.75rem' }}>
          {course.price}
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default FeaturedCourseCard;
