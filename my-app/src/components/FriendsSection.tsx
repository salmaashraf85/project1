import React from "react";
import { Box, Typography, Button, Divider, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const FriendsSection = () => {
  const friendSuggestions = [
    {
      name: "Laura Evans",
      image: "https://images.unsplash.com/photo-1440589473619-3cde28941638",
    },
    {
      name: "Alexander Thompson",
      image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f",
    },
  ];

  const friends = [
    {
      name: "William Walker",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
      active: false,
    },
    {
      name: "Anna Clarke",
      image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5",
      active: true,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", ml: 3 }}>
      {/* Friend Suggestions Title */}
      <Typography variant="h6" fontWeight="bold">
        Friend Suggestions
      </Typography>

      {/* Friend Suggestions Box */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 7,
          p: 1.5,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.03)",
          width: "100%",
        }}
      >
        {friendSuggestions.map((friend, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Avatar src={friend.image} sx={{ width: 40, height: 40 }} />
                <Typography fontWeight="bold">{friend.name}</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 36,
                    height: 36,
                    backgroundColor: "rgb(46, 141, 255)",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 6px",
                    cursor: "pointer",
                  }}
                >
                  <AddIcon sx={{ fontSize: 18, color: "white" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 36,
                    height: 36,
                    cursor: "pointer",
                  }}
                >
                  <CloseIcon sx={{ fontSize: 20, color: "rgb(97, 97, 97)" }} />
                </Box>
              </Box>
            </Box>

            {index < friendSuggestions.length - 1 && <Divider sx={{ my: 1 }} />}
          </React.Fragment>
        ))}

        {/* Divider after Alexander */}
        <Divider sx={{ my: 1.5 }} />

        <Box>
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "0.75rem",
            }}
          >
            VIEW ALL
          </Button>
        </Box>
      </Box>

      {/* Friends Title */}
      <Typography variant="h6" mt={1} fontWeight={"bold"}>
        Friends
      </Typography>

      {/* Friends Box */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 7,
          p: 1.5,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.03)",
          width: "100%",
        }}
      >
        {friends.map((friend, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Avatar
                  src={friend.image}
                  sx={{
                    width: 40,
                    height: 40,
                    border: friend.active ? "2px solid #4CAF50" : "2px solid transparent",
                  }}
                />
                <Typography fontWeight="bold" >{friend.name}</Typography>
              </Box>

              <Button
                variant="text"
                onClick={() => console.log(`Go to ${friend.name}'s profile`)}
                sx={{
                  textTransform: "none",
                  color: "rgb(46, 141, 255)",
                  fontWeight: "bold",
                }}
              >
                PROFILE
              </Button>
            </Box>

            {index < friends.length - 1 && <Divider sx={{ my: 1 }} />}
          </React.Fragment>
        ))}

        <Divider sx={{ my: 1.5 }} />

        <Box>
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "0.75rem",
            }}
          >
            VIEW ALL
          </Button>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          FIND FRIENDS
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          INVITE FRIENDS
        </Button>
      </Box>
    </Box>
  );
};

export default FriendsSection;
