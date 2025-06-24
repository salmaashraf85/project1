import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Button,
  Rating
} from '@mui/material';

interface Course {
  title: string;
  author: string;
  time: string;
  rating: number;
  price: string;
  img: string;
  authorImg: string;
}

const featuredCourses: Course[] = [
  {
    title: "Power BI",
    author: "John Eames",
    time: "1h 53m",
    rating: 4.9,
    price: "$24",
    img: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a",
    authorImg: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
  },
  {
    title: "Agile Project Management",
    author: "Curt Rits",
    time: "59m",
    rating: 4.3,
    price: "$18",
    img: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9",
    authorImg: "https://images.unsplash.com/photo-1590086782957-93c06ef21604"
  },
  {
    title: "Pivot Tables",
    author: "Jane Doe",
    time: "1h 23m",
    rating: 4.6,
    price: "$24",
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
    authorImg: "https://images.unsplash.com/photo-1527423460268-0b3795a97e7f"
  },
  {
    title: "Power BI",
    author: "Ian Brown",
    time: "1h 17m",
    rating: 4.1,
    price: "$24",
    img: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
    authorImg: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
  },
];

interface SaveIconProps {
  idx: number;
}

const SaveIcon: React.FC<SaveIconProps> = ({ idx }) => (
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

const FeaturedCourses: React.FC = () => {
  return (
    <Box sx={{ width: '100%', px: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Featured Courses
      </Typography>

      {/* Flex wrapper */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {featuredCourses.map((course, idx) => (
          <Box
            key={idx}
            sx={{
              flex: {
                xs: '100%',
                sm: 'calc(50% - 8px)',
                md: 'calc(25% - 12px)'
              },
              minWidth: '260px'
            }}
          >
            <Card
              sx={{
                borderRadius: 6,
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '40%',
                  overflow: 'hidden',
                  margin: '12px 12px 0 12px',
                  borderRadius: '8px',
                }}
              >
                <CardMedia
                  component="img"
                  image={course.img}
                  alt={course.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                  }}
                />
                <SaveIcon idx={idx} />
              </Box>

              <CardContent
                sx={{
                  flexGrow: 1,
                  padding: '0px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    padding: '2px 4px',
                    maxWidth: '140px',
                    position: 'relative',
                    top: '-30px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  <Avatar
                    src={course.authorImg}
                    sx={{
                      width: 35,
                      height: 35,
                      mr: 0.5,
                    }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    fontSize="0.9rem"
                    noWrap
                  >
                    {course.author}
                  </Typography>
                </Box>

                <Typography fontWeight="bold" variant="body1">
                  {course.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: 'auto',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ mr: 3 }}>
                      {course.time}
                    </Typography>
                    <Rating
                      value={course.rating}
                      precision={0.1}
                      size="small"
                      readOnly
                      sx={{
                        '& .MuiRating-icon': {
                          fontSize: '14px',
                        },
                      }}
                    />
                    <Typography variant="caption" sx={{ ml: 1 }}>
                      {course.rating.toFixed(1)}/5
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: '15px',
                      minWidth: '50px',
                      height: '30px',
                      fontSize: '0.75rem',
                      backgroundColor: '#1976d2',
                      color: 'white',
                      padding: '0 8px',
                      '&:hover': {
                        backgroundColor: '#1565c0',
                      },
                    }}
                  >
                    {course.price}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedCourses;
