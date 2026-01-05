import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class VisibilityPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.VISIBILITY;
  readonly hideButton: Locator;
  readonly removedButton: Locator;
  readonly zeroWidthButton: Locator;
  readonly overlappedButton: Locator;
  readonly coverOverlappedButton: Locator;
  readonly opacity0Button: Locator;
  readonly visibilityHiddenButton: Locator;
  readonly displayNoneButton: Locator;
  readonly offscreenButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Visibility' });
    this.hideButton = page.getByRole('button', { name: 'Hide' });
    this.removedButton = page.getByRole('button', { name: 'Removed' });
    this.zeroWidthButton = page.getByRole('button', { name: 'Zero Width' });
    this.overlappedButton = page.getByRole('button', { name: 'Overlapped' });
    this.coverOverlappedButton = page.locator('#hidingLayer');
    this.opacity0Button = page.getByRole('button', { name: 'Opacity 0' });
    this.visibilityHiddenButton = page.getByRole('button', { name: 'Visibility Hidden' });
    this.displayNoneButton = page.getByRole('button', { name: 'Display None' });
    this.offscreenButton = page.getByRole('button', { name: 'Offscreen' });
  }

  async isTopElementCovering(expectedId: string = 'hidingLayer'): Promise<boolean> {
    const actualId: string = await this.overlappedButton.evaluate((button) => {
      const rect: DOMRect = button.getBoundingClientRect();
      const centerX: number = rect.left + rect.width / 2;
      const centerY: number = rect.top + rect.height / 2;

      const elementAtPoint: Element | null = document.elementFromPoint(centerX, centerY);

      return elementAtPoint ? elementAtPoint.id : 'no-element-found';
    });

    if (actualId !== expectedId) {
      console.warn(`Visibility Check: Expected ${expectedId} to be on top, but found "${actualId}" instead.`);
    }

    return actualId === expectedId;
  }

}
