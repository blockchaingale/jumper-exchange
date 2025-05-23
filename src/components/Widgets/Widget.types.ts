'use client';
import type { StarterVariantType } from '@/types/internal';
import type { ThemeMode } from '@/types/theme';
import { ChainId } from '@lifi/sdk';
import type { BlogWidgetProps } from '../Blog/BlogWidget';

export const themeAllowChains: ChainId[] = [
  ChainId.ETH,
  ChainId.BAS,
  ChainId.OPT,
  ChainId.ARB,
  ChainId.AVA,
  ChainId.BSC,
];

export interface WidgetProps extends Omit<BlogWidgetProps, 'allowChains'> {
  allowChains?: number[];
  allowToChains?: number[];
  widgetIntegrator?: string;
  starterVariant: StarterVariantType;
  activeThemeMode?: ThemeMode;
  activeTheme?: string;
  autoHeight?: boolean;
}
