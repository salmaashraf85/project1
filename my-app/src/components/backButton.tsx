import { Button } from "@mui/material";
import React, { FC } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const BackButton: FC<ButtonProps> = ({ isPreviwed, setIsPreviewd }) => {
  return (
    <Button
      startIcon={<KeyboardDoubleArrowLeftIcon />}
      onClick={() => {
        if (setIsPreviewd) {
    setIsPreviewd(false);
        }
  }}
      sx={{
        display: isPreviwed ? 'inline-flex' : 'none',
        position: 'absolute',
        top: 16,
        left: 100,
        color: 'primary',
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '1rem',
        background: 'none',
        boxShadow: 'none',
        '&:hover': {
          background: 'transparent',
          textDecoration: 'underline'
        }
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
