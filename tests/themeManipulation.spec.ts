import { test } from '@playwright/test';
import { closeWelcomeScreen } from './testData/landingPageFunctions';
import {
  openOrCloseMainMenu,
  Theme,
  switchTheme,
} from './testData/menuFunctions';
import { expectBackgroundColorToHaveCss } from './testData/menuFunctions';

test.describe('Switch between dark and light theme and check the background color', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.use({ colorScheme: 'dark' });
  test('Should able to change the theme color to Dark', async ({ page }) => {
    await closeWelcomeScreen(page);
    await openOrCloseMainMenu(page);
    await switchTheme(page, Theme.Dark);
    await expectBackgroundColorToHaveCss(page, 'linear-gradient(to bottom right, #050A1F, #0A1433, #101C40)');
  });

  test.use({ colorScheme: 'light' });
  test('Should able to change the theme color to Light', async ({ page }) => {
    await closeWelcomeScreen(page);
    await page.locator('#main-burger-menu-button').click();
    await page.locator('#theme-switch-tabs-0').click();
    await page.locator('#main-burger-menu-button').click();
    expectBackgroundColorToHaveCss(page, 'rgb(243, 235, 255)');
  });
});
