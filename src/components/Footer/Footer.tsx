'use client';
import { styled, useTheme } from '@mui/material/styles';

const FooterContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  display: 'none', // Default to hidden
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 50, // Ensure it appears above the canvas
  background: theme.palette.mode === 'dark' ? 'rgba(3, 1, 13, 1)' : 'rgba(205, 200, 235, 1)', // Semi-transparent background
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  fontSize: '14px',
  borderTopWidth: '1px',
  borderColor: 'rgba(255, 255, 255, .12)',
  fontFamily: '"Manrope", sans-serif',
  fontWeight: '600',
  [theme.breakpoints.up('md')]: {
    display: 'flex', // Show footer on large screens and above
  },
}));

const FooterContainerSub = styled('div')(() => ({
  width: '100%',
  height: '28px', // Same height as the canvas
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
  padding: '0 .75rem',
}));

const FooterText = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '.75rem',
  lineHeight: '1.125rem',
  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .54)' : 'rgba(0, 0, 0, .54)',
}));

const FooterLinks = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'nowrap',
  gap: '.25rem',
}));

const StatusIndicator = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  color: 'rgb(101, 240, 194)', // Green color for "Operational"
  fontSize: '.75rem',
  lineHeight: '1.125rem',
}));

const FooterCommunity = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

const FooterCommunitySub = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '.5rem',
}));

const FooterLinkIcon = styled('a')(({ theme }) => ({
    width: '20px',
    height: '20px',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'fill 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
    '& svg': {
      fill: theme.palette.mode === 'dark' ? 'hsla(0,0%,100%,.54)' : 'hsla(360,100%,0%,.54)', // Default fill color
      transition: 'fill 0.3s ease', // Smooth transition for fill color
    },
    '&:hover svg': {
      fill: theme.palette.mode === 'dark' ? 'hsla(0,0%,100%,.98)' : 'hsla(360,100%,0%,.98)', // Change fill color on hover
      transform: 'scale(1.1)', // Optional: Slightly enlarge the icon on hover
    },
  }));

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <FooterContainerSub>
        <FooterCommunity>
          <StatusIndicator>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              style={{ fill: 'rgb(101, 240, 194)' }}
              xmlns="http://www.w3.org/2000/svg"
              fillOpacity="1"
              fill="currentColor"
            >
              <path d="M9.02092 2.92969C6.18562 2.92969 3.51037 4.13854 1.68502 6.18754C1.40947 6.49676 1.446 6.96671 1.75537 7.24218C2.0646 7.51743 2.53447 7.48143 2.81002 7.17183C4.35112 5.44196 6.6141 4.42969 9.02092 4.42969C11.4205 4.42969 13.6369 5.43123 15.185 7.17183C15.4603 7.48143 15.9301 7.51743 16.2397 7.24218C16.5492 6.96694 16.5853 6.49699 16.31 6.18754C14.4787 4.12856 11.8512 2.92969 9.02092 2.92969ZM9.02092 5.92969C7.04092 5.92969 5.20867 6.78461 3.93502 8.25019C3.6633 8.56294 3.6927 9.03318 4.00537 9.30468C4.31797 9.57618 4.7883 9.54693 5.06002 9.23418C6.05175 8.09343 7.47982 7.42968 9.02092 7.42968C10.5348 7.42968 11.9446 8.08144 12.935 9.18769C13.2113 9.49593 13.681 9.51093 13.9897 9.23418C14.2983 8.95818 14.3364 8.48793 14.06 8.17968C12.7879 6.75896 10.9659 5.92969 9.02092 5.92969ZM9.02092 8.92968C7.91917 8.92968 6.89242 9.40218 6.18502 10.2189C5.91375 10.5317 5.94225 11.0019 6.25537 11.2734C6.56835 11.5449 7.03875 11.5164 7.31002 11.2029C7.73542 10.7124 8.3589 10.4297 9.02092 10.4297C9.6684 10.4297 10.2604 10.7072 10.685 11.1797C10.962 11.4879 11.4552 11.5037 11.7631 11.2262C12.0712 10.9494 12.087 10.4799 11.81 10.1717C11.1037 9.38643 10.0983 8.92968 9.02092 8.92968ZM8.99752 11.9297C8.81609 11.9297 8.64374 12.0047 8.50537 12.1404C8.50537 12.1404 7.3935 13.2362 6.95842 13.6637C6.52342 14.0919 6.7968 14.9319 7.49752 14.9297H9.63037H10.4975C11.1864 14.9319 11.477 14.0739 11.0366 13.6404C10.5961 13.2069 9.51322 12.1404 9.51314 12.1404C9.37469 12.0047 9.17894 11.9297 8.99752 11.9297Z"></path>
            </svg>{' '}
            Operational
            </StatusIndicator>
            <div style={{
                  position: 'relative',
                  margin: '0 .5rem',
                  pointerEvents: 'none',
                  height: '18px',
                }}>
                  <span style={{
                  content: '""',
                  position: 'relative',
                  top: -2.5,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  borderLeft: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, .12)' : '1px solid rgba(0, 0, 0, .12)',
                  boxSizing: 'content-box',
                  }}></span>
            </div>
            <FooterCommunitySub>
            <span
              style={{
                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .54)' : 'rgba(0, 0, 0, .54)',
                fontSize: '.75rem',
                lineHeight: '1.125rem',
              }}
            >
              Join our community
            </span>
            <FooterLinks>
                <FooterLinkIcon href="https://t.me/marble_games_news">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" fillOpacity="1" xmlns="http://www.w3.org/2000/svg"><path d="M4.108 9.464S9.645 7.13 11.565 6.31c.736-.328 3.233-1.38 3.233-1.38s1.152-.46 1.056.658c-.032.46-.288 2.069-.544 3.81-.384 2.463-.8 5.157-.8 5.157s-.064.755-.608.887c-.544.13-1.44-.46-1.6-.592-.129-.098-2.401-1.576-3.233-2.299-.224-.197-.48-.591.032-1.051a124 124 0 0 0 3.36-3.285c.384-.394.768-1.313-.832-.197-2.272 1.61-4.513 3.12-4.513 3.12s-.512.33-1.472.034-2.08-.69-2.08-.69-.768-.493.544-1.018"></path></svg>
                </FooterLinkIcon>
                <FooterLinkIcon href="https://discord.com/invite/marbleland">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" fillOpacity="1" xmlns="http://www.w3.org/2000/svg"><path d="M14.956 5.522c1.604 2.374 2.396 5.053 2.1 8.136a.05.05 0 0 1-.02.033 11.7 11.7 0 0 1-3.55 1.805.045.045 0 0 1-.05-.017 9.6 9.6 0 0 1-.725-1.188.046.046 0 0 1 .024-.063 7 7 0 0 0 1.108-.531.046.046 0 0 0 .004-.076 6 6 0 0 1-.22-.174.04.04 0 0 0-.047-.006c-2.296 1.068-4.812 1.068-7.136 0a.04.04 0 0 0-.046.006 6 6 0 0 1-.22.174.046.046 0 0 0 .005.076c.353.204.721.384 1.107.531.025.01.037.039.025.063a8.5 8.5 0 0 1-.725 1.188.05.05 0 0 1-.05.017 11.7 11.7 0 0 1-3.546-1.805.05.05 0 0 1-.018-.033c-.248-2.667.257-5.368 2.097-8.137a.04.04 0 0 1 .02-.016 11.6 11.6 0 0 1 2.89-.903.05.05 0 0 1 .046.022c.125.224.269.51.366.744a10.7 10.7 0 0 1 3.246 0 8 8 0 0 1 .36-.744.044.044 0 0 1 .046-.022 11.7 11.7 0 0 1 2.89.903q.012.005.019.017m-6.018 5.07c.011-.788-.56-1.44-1.276-1.44-.71 0-1.276.647-1.276 1.44 0 .795.576 1.442 1.276 1.442.71 0 1.276-.647 1.276-1.441m4.718 0c.011-.788-.56-1.44-1.276-1.44-.71 0-1.276.647-1.276 1.44 0 .795.577 1.442 1.276 1.442.717 0 1.276-.647 1.276-1.441"></path></svg>
                </FooterLinkIcon>
                <FooterLinkIcon href="https://x.com/marbletoken">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" fillOpacity="1" xmlns="http://www.w3.org/2000/svg"><path d="m4.42 4.73 4.633 6.194-4.662 5.037H5.44l4.082-4.41 3.298 4.41h3.57l-4.893-6.543 4.34-4.689h-1.05l-3.759 4.062-3.037-4.062zm1.543.772h1.64l7.244 9.686h-1.64z"></path></svg>
                </FooterLinkIcon>
            </FooterLinks>
          </FooterCommunitySub>
        </FooterCommunity>
        <FooterText>Powered by Marble & Orderly</FooterText>
      </FooterContainerSub>
    </FooterContainer>
  );
};

export default Footer;