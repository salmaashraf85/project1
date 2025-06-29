import { Box, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import React from "react";

interface StatItem {
  label: string;
  value: number;
  bgColor: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    label: "Finished Courses",
    value: 3,
    bgColor: "#d5eaff",
    icon: <CheckIcon sx={{ color: "#2E8DFF", fontSize: 28 }} />,
  },
  {
    label: "Hours Learned",
    value: 56,
    bgColor: "#fff3e0",
    icon: (
      <Box
        component="svg"
        viewBox="0 0 24 24"
        sx={{ width: 32, height: 32, fill: "#FE9E23" }}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z" />
      </Box>
    ),
  },
  {
    label: "Skills Achieved",
    value: 7,
    bgColor: "#e6f4ea",
    icon: <EmojiEventsIcon sx={{ color: "#9FCB66", fontSize: 28 }} />,
  },
];

const TotalStatistics: React.FC = () => {
  return (
    <Box mb={4}>
      <Typography variant="h6" fontWeight="bold" mb={2} fontSize={30}>
        Total Statistics
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {stats.map((item, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              flex: "1 1 200px", // responsive width
              p: 1,
              backgroundColor: "#fff",
              borderRadius: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 70,
                backgroundColor: item.bgColor,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1.5,
              }}
            >
              {item.icon}
            </Box>

            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                color: "#555",
                letterSpacing: 0.5,
              }}
            >
              {item.label.toUpperCase()}
            </Typography>

            <Typography variant="h6" fontWeight="bold">
              {item.value}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default TotalStatistics;
