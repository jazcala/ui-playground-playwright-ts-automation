import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { URL_PATH_CONTSTANTS } from "../utils/test-constants";

export class HiddenLayersPage extends BasePage {

  protected readonly path = URL_PATH_CONTSTANTS.HIDDEN_LAYERS;
  readonly title: Locator;
  readonly blueButton: Locator;
  readonly greenButton: Locator;

  constructor(page: Page) {

    super(page);
    this.title = page.getByRole('heading', { name: 'Hidden Layers' });
    this.blueButton = page.getByRole('button', { name: 'Button' }).and(page.locator('#blueButton'));
    this.greenButton = page.getByRole('button', { name: 'Button' }).and(page.locator('#greenButton'));

  }

}
