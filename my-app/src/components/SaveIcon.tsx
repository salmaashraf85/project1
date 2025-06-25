import React from 'react';
import { Box } from '@mui/material';

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
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 1,
      borderRadius: '10px',
      backgroundColor: idx === 0 ? 'rgba(203, 225, 250, 0.3)' : 'rgba(227, 227, 227, 0.3)',
      color: idx === 0 ? 'rgb(46, 141, 255)' : 'rgb(177, 177, 177)',
    }}
  >
    <svg viewBox="0 0 384 512" style={{ width: 14, height: 14, fill: 'currentColor' }}>
      <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
    </svg>
  </Box>
);

export default SaveIcon;
