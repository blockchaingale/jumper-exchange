'use client';
import { usePathname } from 'next/navigation';

import {
  JUMPER_LEARN_PATH,
  JUMPER_SCAN_PATH,
  JUMPER_TX_PATH,
  JUMPER_WALLET_PATH,
} from '@/const/urls';
import { useWelcomeScreen } from '@/hooks/useWelcomeScreen';
import { useMenuStore } from '@/stores/menu';
import { useThemeStore } from 'src/stores/theme';
import { Logo, LogoLink, NavbarButtons, NavbarContainer } from '.';
import { SportsRugbySharp } from '@mui/icons-material';
import { Button, styled, useTheme } from '@mui/material';

const TabButton = styled(Button)(({ theme }) => ({
  color: 'rgba(255, 255, 255, .88)',
  borderRadius: '0.25rem !important',
  padding: '0 .75rem',
  fontSize: '.75rem',
  lineHeight: '1.125rem',
  height: '1.75rem',
  display: 'inline-flex',
  fontFamily: '"Manrope", sans-serif',
  fontWeight: '600',
  '&[data-roll="false"]': {
    backgroundColor: 'transparent',
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .36)' : 'rgba(0, 0, 0, .36)',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(36, 32, 47, 1)' : 'rgba(205, 200, 235, 1)',
    }
  },
  '&[data-roll="true"]': {
    backgroundImage: 'linear-gradient(45deg, rgb(161, 48, 245) 6.62%, rgb(161, 48, 245) 86.5%)',
  },
  // '&:hover': {
  //   backgroundColor: theme.palette.surface1.main,
  //   color: theme.palette.text.primary,
  // },
}));

const Tab2Button = styled(Button)(({ theme }) => ({
  color: 'rgba(255, 255, 255, .88)',
  borderRadius: '0.25rem !important',
  padding: '.25rem .75rem',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  height: '32px',
  display: 'inline-flex',
  fontFamily: '"Manrope", sans-serif',
  fontWeight: '600',
  '&[data-roll="false"]': {
    backgroundColor: 'transparent',
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .36)' : 'rgba(0, 0, 0, .36)',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(36, 32, 47, 1)' : 'rgba(205, 200, 235, 1)',
    }
  },
  '&[data-roll="true"]': {
    backgroundImage: 'linear-gradient(45deg, rgb(161, 48, 245) 6.62%, rgb(161, 48, 245) 86.5%)',
  },
  // '&:hover': {
  //   backgroundColor: theme.palette.surface1.main,
  //   color: theme.palette.text.primary,
  // },
}));


const StyledDiv = styled('div')(({ theme }) => ({
  padding: '1px',
  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .12)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '.375rem',
  gap: '0',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexWrap: 'nowrap',
  display: 'flex',
  position: 'relative', // Required for pseudo-elements
  [theme.breakpoints.down('sm')]: {
    display: 'none', // Hide on small screens
  },
}));

const Styled2Div = styled('div')(({ theme }) => ({
  gap: '6px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'nowrap',
  fontFamily: '"Manrope", sans-serif',
  fontWeight: '600',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  [theme.breakpoints.down('sm')]: {
    display: 'none', // Hide on small screens
  },
}));

export const Navbar = ({ disableNavbar = false }) => {
  const pathname = usePathname();
  const isLearnPage = pathname?.includes(JUMPER_LEARN_PATH);
  const isScanPage =
    pathname?.includes(JUMPER_SCAN_PATH) ||
    pathname?.includes(JUMPER_TX_PATH) ||
    pathname?.includes(JUMPER_WALLET_PATH);
  const { setWelcomeScreenClosed } = useWelcomeScreen();
  const configTheme = useThemeStore((state) => state.configTheme);

  const { closeAllMenus } = useMenuStore((state) => state);
  const handleClick = () => {
    closeAllMenus();
    setWelcomeScreenClosed(false);
  };

  let logoHref;
  if (isLearnPage) {
    logoHref = JUMPER_LEARN_PATH;
  } else if (isScanPage) {
    logoHref = JUMPER_SCAN_PATH;
  } else {
    logoHref = '/';
  }

  return (
    <NavbarContainer hasBlurredNavigation={configTheme?.hasBlurredNavigation}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '.75rem',
        flexWrap: 'nowrap',
      }}>
        <LogoLink href={logoHref} id="jumper-logo" onClick={handleClick}>
          <Logo
            variant={isScanPage ? 'scan' : isLearnPage ? 'learn' : 'default'}
          />
        </LogoLink>
        <StyledDiv>
          <TabButton data-roll='true'>Swap</TabButton>
          <a href="https://defi.marbleland.io">
            <TabButton data-roll='false'>Trade</TabButton>
          </a>
        </StyledDiv>
        <Styled2Div>
          <a href="https://defi.marbleland.io/markets">
            <Tab2Button data-roll='false'>Market</Tab2Button>
          </a>
          <a href="https://defi.marbleland.io/portfolio">
            <Tab2Button data-roll='false'>Dashboard</Tab2Button>
          </a>
        </Styled2Div>
      </div>
      <NavbarButtons />
    </NavbarContainer>
  );
};
