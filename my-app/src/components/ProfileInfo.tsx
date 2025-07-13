import { Avatar, Box, Typography, Paper } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ProfileInfo: React.FC = () => {
  return (
    <Box display="flex" alignItems="flex-start" gap={3} flexWrap="wrap" width="100%">
      {/* Profile Picture */}
      <Avatar
        src="https://assets.api.uizard.io/api/cdn/stream/ecfce0e0-bae1-4e4b-9187-d14a85958155.jpg"
        alt="Sally Robins"
        sx={{
          width: 150,
          height: 150,
          boxShadow: '0 0 0 rgba(0, 0, 0, 0.08)',
        }}
      />

      {/* User Info */}
      <Box flex={1}> {/* ✅ This makes it stretch to fill remaining space */}
        <Typography variant="h5" fontWeight="bold" fontSize={40} sx={{color:"#444"}}>Sally Robins</Typography>

        {/* Location with Icon */}
        <Box display="flex" alignItems="center" gap={0.5} mt={0.5}>
          <LocationOnIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">New York</Typography>
        </Box>

        {/* Outer Paper */}
        <Paper elevation={1} sx={{ p: 1, borderRadius: 5, mt: 2, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          {/* Inner Paper */}
          <Paper
            elevation={1}
            sx={{
              p: 2,
              borderRadius: 5,
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Stats */}
            <Box display="flex" gap={6} justifyContent="space-around" mt={1}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h6" fontWeight="bold">0</Typography>
                <Typography variant="body2" color="text.secondary">My Courses</Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h6" fontWeight="bold">2</Typography>
                <Typography variant="body2" color="text.secondary">Followers</Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h6" fontWeight="bold">32</Typography>
                <Typography variant="body2" color="text.secondary">Following</Typography>
              </Box>
            </Box>
          </Paper>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
