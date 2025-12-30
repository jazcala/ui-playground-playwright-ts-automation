import { Page, Locator } from '@playwright/test';
import { BasePage } from "./base.page";
import { URL_PATH_CONTSTANTS } from "../utils/test-constants";

export class SampleAppPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.SAMPLE_APP;
  readonly loginStatus: Locator;
  readonly usernameField: Locator;
  readonly passwordfield: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Sample App' });
    this.loginStatus = page.locator('#loginstatus');
    this.usernameField = page.getByPlaceholder('User Name');
    this.passwordfield = page.getByPlaceholder('********');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.logoutButton = page.getByRole('button', { name: 'Log Out' });
  }

  async login(username: string, password: string = 'pwd'): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordfield.fill(password);
    await this.loginButton.click();
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }

}
