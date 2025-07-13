import React from "react";
import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// 🔥 Custom Flame Icon
const FlameIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{
      width: 32,
      height: 32,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
      fill: "#FE9E23",
    }}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z" />
  </svg>
);

const achievements = [
  {
    title: "Committed Learner",
    description: "Reach a 3 day streak",
    current: 2,
    total: 3,
    icon: <FlameIcon />,
    bgColor: "#FFF3E0",
    progressColor: "#FE9E23",
  },
  {
    title: "Point Collector",
    description: "Earn 1800 more points",
    current: 1200,
    total: 3000,
    icon: <EmojiEventsIcon sx={{ color: "#8BC34A", fontSize: 32 }} />,
    bgColor: "#E6F4EA",
    progressColor: "#8BC34A"
  },
];

const Achievements: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" mb={2} fontSize={30}>
        Achievements
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        {achievements.map((item, index) => {

          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.04)",
                p: 2,
                gap: 2,
              }}
            >
              {/* Icon Box */}
              <Box
                sx={{
                  width: 100,
                  height: 90,
                  backgroundColor: item.bgColor,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>

              {/* Content Box */}
              <Box flex={1}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight="bold">{item.title}</Typography>
                  <Typography fontSize={13} color="text.secondary">
                    {item.current}/{item.total}
                  </Typography>
                </Box>

                {/* Progress Bar */}
                <Box
                  sx={{
                    mt: 1,
                    mb: 0.5,
                    height: 6,
                    borderRadius: 10,
                    backgroundColor: "#eee",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: "8%",
                      height: "100%",
                      backgroundColor: item.progressColor,
                      transition: "width 0.3s ease",
                    }}
                  />
                </Box>

                <Typography fontSize={13} color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Achievements;
