'use client';

import { Box, Typography } from '@mui/material';
import type { Breakpoint } from '@mui/material/styles';
import { alpha, darken, lighten, styled } from '@mui/material/styles';

const MessageCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  whiteSpace: 'pre-line',
  margin: 'auto',
  width: '100%',
  padding: theme.spacing(2, 3),
  boxShadow: theme.shadows[1],
  [theme.breakpoints.up('sm' as Breakpoint)]: {
    width: 416,
  },
}));

export const WarningMessageCard = styled(MessageCard)(({ theme }) => ({
  borderRadius: '12px',
  backgroundColor:
    theme.palette.mode === 'light'
      ? alpha(theme.palette.warning.main, 0.24)
      : alpha(theme.palette.warning.main, 0.16),
}));

export const WarningMessageCardTitle = styled(Box)(({ theme }) => ({
  padding: 0,
  color:
    theme.palette.mode === 'light'
      ? darken(theme.palette.warning.main, 0.36)
      : alpha(theme.palette.warning.dark, 1),
}));

export const InfoMessageCard = styled(MessageCard)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? alpha(theme.palette.info.main, 0.12)
      : alpha(theme.palette.info.main, 0.16),
}));

export const InfoMessageCardTitle = styled(Box)(({ theme }) => ({
  padding: 0,
  color:
    theme.palette.mode === 'light'
      ? theme.palette.info.main
      : lighten(theme.palette.info.main, 0.24),
}));

export const InfoMessageCardClickable = styled(MessageCard)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? alpha(theme.palette.info.main, 0.12)
      : alpha(theme.palette.info.main, 0.16),
  cursor: 'pointer',
}));

export const InfoMessageCardSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.black.main,
}));
