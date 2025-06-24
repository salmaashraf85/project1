import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, LinearProgress } from '@mui/material';

interface LearningItem {
  title: string;
  author: string;
  progress: number;
  img: string;
}

interface MyLearningCardProps {
  item: LearningItem;
  idx: number;
}

const SaveIcon: React.FC<{ idx: number }> = ({ idx }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '32px',
      height: '32px',
      cursor: 'inherit',
      color: idx === 0 ? 'rgb(46, 141, 255)' : 'rgb(177, 177, 177)',
      backgroundColor: idx === 0 ? 'rgba(203, 225, 250, 0.3)' : 'rgba(227, 227, 227, 0.3)',
      borderRadius: '10px',
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 1,
    }}
  >
    <svg
      viewBox="0 0 384 512"
      style={{
        width: '14px',
        height: '14px',
        fill: idx === 0 ? 'rgb(46, 141, 255)' : 'rgb(177, 177, 177)'
      }}
    >
      <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
    </svg>
  </Box>
);

const MyLearningCard: React.FC<MyLearningCardProps> = ({ item, idx }) => {
  return (
    <Card
      sx={{
        borderRadius: 6,
        display: 'flex',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        height: '150px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 2, 
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: '180px',
          height: '88%',
          padding: 1,
          objectFit: 'cover',
          borderRadius: '20px',
        }}
        image={item.img}
        alt={item.title}
      />
      <SaveIcon idx={idx} />
      <CardContent
        sx={{
          flex: 1,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography fontWeight="bold" gutterBottom variant="h6" sx={{ mb: 1 }}>
          {item.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {item.author}
        </Typography>
        <Box sx={{ mt: 'auto' }}>
          <LinearProgress
            variant="determinate"
            value={item.progress}
            sx={{
              height: 8,
              borderRadius: 4,
              width: '100%',
            }}
          />
          <Typography variant="body2" mt={1} color="text.secondary">
            {item.progress}% complete
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyLearningCard;