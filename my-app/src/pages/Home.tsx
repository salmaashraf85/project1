import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Button,
  Rating,
  LinearProgress,
  Chip,
  Container,
} from '@mui/material';

import Grid from '@mui/material/Grid';

interface Course {
  title: string;
  author: string;
  time: string;
  rating: number;
  price: string;
  img: string;
  authorImg: string;
}

interface LearningItem {
  title: string;
  author: string;
  progress: number;
  img: string;
}

const featuredCourses: Course[] = [
  {
    title: "Power BI",
    author: "John Eames",
    time: "1h 53m",
    rating: 4.9,
    price: "$24",
    img: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8bWF4aW1hbGZvY3VzfGVufDF8fHx8MTY1MjIyMDQyNA&ixlib=rb-1.2.1&q=80&w=1080",
    authorImg: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxN3x8cG9ydHJhaXR8ZW58MXx8fHwxNjU3NTM4MzIw&ixlib=rb-1.2.1&q=80&w=1080"
  },
  {
    title: "Agile Project Management",
    author: "Curt Rits",
    time: "59m",
    rating: 4.3,
    price: "$18",
    img: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
    authorImg: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    title: "Pivot Tables",
    author: "Jane Doe",
    time: "1h 23m",
    rating: 4.6,
    price: "$24",
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxleGNlbHxlbnwxfHx8fDE2NzI5OTU0NTg&ixlib=rb-4.0.3&q=80&w=1080",
    authorImg: "https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNDh8fGxhZHl8ZW58MXx8fHwxNjcyOTk1Njcw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    title: "Power BI",
    author: "Ian Brown",
    time: "1h 17m",
    rating: 4.1,
    price: "$24",
    img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
    authorImg: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
  },
];

const categories: string[] = [
  "Sales",
  "HR",
  "Drawing",
  "Big Data",
  "Design",
  "Marketing",
  "Astronomy",
];

const myLearning: LearningItem[] = [
  {
    title: "Becoming a Photographer",
    author: "Clara Manning",
    progress: 69,
    img: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    title: "Design Thinking 2.0",
    author: "Chris Kinley",
    progress: 27,
    img: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
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
      padding: 0,
      cursor: 'inherit',
      overflow: 'hidden',
      opacity: 1,
      color: idx === 0 ? 'rgb(46, 141, 255)' : 'rgb(177, 177, 177)',
      backgroundColor: idx === 0 ? 'rgba(203, 225, 250, 0.3)' : 'rgba(227, 227, 227, 0.3)',
      borderRadius: '10px',
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.08)',
      border: '0px',
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
        overflow: 'visible', 
        opacity: 'unset', 
        zIndex: 1, 
        fill: idx === 0 ? 'rgb(46, 141, 255)' : 'rgb(177, 177, 177)'
      }}
    >
      <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
    </svg>
  </Box>
);

const Home: React.FC = () => {
  return (
    <Container 
      maxWidth="xl"
      sx={{ 
        backgroundColor: "#f9f9f9", 
        minHeight: '100vh',
        padding: '24px',
      }}
    >
      {/* Featured Courses */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Featured Courses
        </Typography>
        <Grid container spacing={2}>
          {featuredCourses.map((course, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ 
                borderRadius: 6, 
                position: 'relative', 
                width: '290px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
              }}>
                <Box sx={{ 
                  position: 'relative', 
                  paddingTop: '40%',
                  overflow: 'hidden',
                  margin: '12px 12px 0 12px',
                  borderRadius: '8px'
                }}>
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
                <CardContent sx={{ 
                  flexGrow: 1, 
                  padding: '0px 20px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Box sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: '20px',
                    padding: '2px 4px', 
                    maxWidth: '140px', 
                    zIndex: 1,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    position: 'relative',
                    top: '-30px',
                  }}>
                    <Avatar 
                      src={course.authorImg} 
                      sx={{ 
                        width: 35, 
                        height: 35, 
                        mr: 0.5,
                        borderRadius: '50%'
                      }} 
                    />
                    <Typography variant="body1" fontWeight="bold" fontSize="0.9rem" noWrap>
                      {course.author}
                    </Typography>
                  </Box>
                  <Typography fontWeight="bold" variant="body1" >
                    {course.title}
                  </Typography>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: 'auto'
                  }}>
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
                            
                          }
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
                          backgroundColor: '#1565c0' 
                        }
                      }}
                    >
                      {course.price}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Categories */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Categories
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2,
          justifyContent: 'flex-start',
        }}>
          {categories.map((cat, idx) => {
            const isBlueCategory = ['HR', 'Drawing', 'Big Data'].includes(cat);
            
            const getIcon = () => {
              switch(cat) {
                case 'Sales':
                  return (
                    <svg viewBox="0 0 496 512" style={{ width: 24, height: 24,fill: isBlueCategory ? '#1976d2' : '#b1b1b1' }}>
                      <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
                    </svg>
                  );
                case 'HR':
                  return (
                    <svg viewBox="0 0 640 512" style={{ width: 24, height: 24, fill: '#1976d2' }}>
                      <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                    </svg>
                  );
                case 'Drawing':
                  return (
                    <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: '#1976d2' }}>
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z" />
                    </svg>
                  );
                case 'Big Data':
                  return (
                    <svg viewBox="0 0 512 512" style={{ width: 24, height: 24, fill: '#1976d2' }}>
                      <path d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z" />
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
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                    </svg>
                  );
                case 'Astronomy':
                  return (
                    <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: isBlueCategory ? '#1976d2' : '#b1b1b1' }}>
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
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
                  px: 3 ,
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
                  width: '110px',
                  height: '50px',
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
                <Box sx={{ mb: 1 }}>
                  {getIcon()}
                </Box>
                <Typography variant="body2" fontWeight="bold">
                  {cat}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* My Learning */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          My Learning
        </Typography>
        <Grid container spacing={2}>
          {myLearning.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card sx={{ 
                borderRadius: 6,
                display: 'flex', 
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                height: '150px',
                width: '600px',
                position: 'relative',
                overflow: 'hidden'
              }}>
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
                <CardContent sx={{ 
                  flex: 1, 
                  padding: '16px',
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Typography fontWeight="bold" gutterBottom variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {item.author}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <LinearProgress variant="determinate" value={item.progress} sx={{ 
                      height: 8, 
                      borderRadius: 4, 
                      width: '100%',
                    }} />
                    <Typography variant="body2" mt={1} display="block" color="text.secondary">
                      {item.progress}% complete
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* See All Button */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Button 
          variant="contained"
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            borderRadius: 20,
            width: '130px',
            height: '35px',
            fontSize: '0.875rem',
            marginRight: 28,
            '&:hover': {
              backgroundColor: '#1565c0'
            }
          }}
        >
          SEE ALL
        </Button>
      </Box>
    </Container>
  );
};

export default Home;