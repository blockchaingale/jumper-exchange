import { useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface BackgroundVideoProps {
  src: string;
  position: 'left' | 'right';
  style?: React.CSSProperties;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, position, style }) => {
  const theme = useTheme();
  const [videoStyle, setVideoStyle] = useState<React.CSSProperties>({
    position: 'absolute',
    top: '25%',
    [position]: '15%',
    height: '50%',
    width: 'auto',
    zIndex: -1,
    objectFit: 'cover',
    borderRadius: '20px',
  });

  useEffect(() => {
    const updateVideoStyle = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Dynamically adjust size and position based on window size
      setVideoStyle((prevStyle) => ({
        ...prevStyle,
        top: windowWidth < 1280 ? '30%' : '25%', // Adjust top position for smaller screens
        [position]: windowWidth < 1280 ? '5%' : '15%', // Adjust left/right position for smaller screens
        height: windowWidth < 1280 ? '40%' : '50%', // Adjust height for smaller screens
        width: windowWidth < 1280 ? 'auto' : 'auto', // Keep width proportional
      }));
    };

    // Initial update
    updateVideoStyle();

    // Add event listener for window resize
    window.addEventListener('resize', updateVideoStyle);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVideoStyle);
    };
  }, [position]);

  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      style={{
       ...videoStyle,
       opacity: theme.palette.mode === 'dark' ? 0.1 : 1,
        ...style, // Allow custom styles to be passed
      }}
    />
  );
};

export default BackgroundVideo;