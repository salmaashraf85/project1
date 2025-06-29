// src/pages/Saved.tsx
import { Box, Typography, Button } from "@mui/material";
import { FC, useState } from "react";
import ImageList from "../components/savedlist";
import React from "react";
import CourseDetails from "../components/CourseDetails";
import { DetailedItems } from "../api/api";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CourseOverview from "../components/CourseOverview";
import BackButton from "../components/backButton";
import CourseActionsButtons from "../components/CourseActionButtons";
const Saved: FC = () => {
  const item = DetailedItems[1];
  const [isPreviwed, setIsPreviewd] = useState(false);
  return (
    <Box sx={{ margin: { sm: "50px", xs: "30px" }, marginTop: "40px" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", pb: "25px" }}>
        {isPreviwed ? "" : "Saved Courses"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          gap: { sm: 10, xs: 10 },
        }}
      >
        {!isPreviwed ? (
          <>
            <ImageList></ImageList>
            <CourseDetails
              title={item.title}
              description={item.description}
              time={item.time}
              img={item.img}
              authorImg={item.authorImg}
              rating={item.rating}
              btn1="preview"
              btn2="buy now"
              author={item.author}
              price=""
              overlay={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.4)",
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <PlayArrowIcon></PlayArrowIcon>
                  Play Preveiw
                </Box>
              }
              isPreview={isPreviwed}
              setIsPreview={setIsPreviewd}
            ></CourseDetails>
          </>
        ) : (
          <>
            <CourseDetails
              title={item.title}
              description={item.description}
              time={item.time}
              img={item.img}
              authorImg={item.authorImg}
              rating={item.rating}
              btn1="preview"
              btn2="buy now"
              author={item.author}
              price=""
              overlay={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.4)",
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <PlayArrowIcon></PlayArrowIcon>
                  Play Preveiw
                </Box>
              }
              isPreview={isPreviwed}
              setIsPreview={setIsPreviewd}
            ></CourseDetails>
            <CourseOverview></CourseOverview>
          </>
        )}
      </Box>

      <CourseActionsButtons
        btnName1=" Preview"
        btnName2="Buy Now"
        setIsPreviewd={setIsPreviewd}
        isPreviwed={isPreviwed}
      ></CourseActionsButtons>

      <BackButton
        isPreviwed={isPreviwed}
        setIsPreviewd={setIsPreviewd}
      ></BackButton>
    </Box>
  );

};

export default Saved;
