import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { DynamicIdPage } from './dynamic-id.page';
import { ClassAttributePage } from './class-attribute.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';
import { HiddenLayersPage } from './hidden-layers.page';
import { LoadDelayPage } from './load-delay.page';
import { AjaxDataPage } from './ajax-data.page';
import { ClientSideDelayPage } from './client-side-delay.page';
import { ClickPage } from './click.page';
import { TextInputPage } from './text-input.page';
import { ScrollbarsPage } from './scrollbars.page';
import { DynamicTablePage } from './dynamic-table.page';
import { VerifyTextPage } from './verify-text.page';
import { ProgressBarPage } from './progress-bar.page';
import { VisibilityPage } from './visibility.page';
import { MouseOverPage } from './mouse-over.page';
import { SampleAppPage } from './sample-app.page';
import { NonBreakingSpacePage } from './non-braking-space.page';
import { OverlappedElementPage } from './overlapped-element.page';
import { ShadowDomPage } from './shadow-dom.page';
import { AlertsPage } from './alerts.page';
import { FileUploadPage } from './file-upload.page';
import { AnimatedButtonPage } from './animated-button.page';
import { DisabledInputPage } from './disabledd-input.page';
import { AutoWaitPage } from './auto-wait.page';

export class LandingPage extends BasePage {

  readonly title: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'UI Test Automation Playground' });
  }

  private async navigateToChallenge<T extends BasePage>(
    linkName: string,
    expectedUrl: string,
    pageClass: new (page: Page) => T

  ): Promise<T> {
    await this.page.getByRole('link', { name: linkName }).click();
    await this.page.waitForURL(expectedUrl);

    return new pageClass(this.page);
  }

  async mapsToDynamicId(): Promise<DynamicIdPage> {

    return this.navigateToChallenge('Dynamic ID', URL_PATH_CONTSTANTS.DYNAMIC_ID, DynamicIdPage);
  }

  async mapsToClassAttributePage(): Promise<ClassAttributePage> {

    return this.navigateToChallenge('Class Attribute', URL_PATH_CONTSTANTS.CLASS_ATTRIBUTE, ClassAttributePage);
  }

  async mapsToHiddenLayersPage(): Promise<HiddenLayersPage> {

    return this.navigateToChallenge('Hidden Layers', URL_PATH_CONTSTANTS.HIDDEN_LAYERS, HiddenLayersPage);
  }

  async mapsToLoadDelay(): Promise<LoadDelayPage> {

    return this.navigateToChallenge('Load Delay', URL_PATH_CONTSTANTS.LOAD_DELAY, LoadDelayPage);
  }

  async mapsToAjaxData(): Promise<AjaxDataPage> {
    return this.navigateToChallenge('AJAX DATA', URL_PATH_CONTSTANTS.AJAX_DATA, AjaxDataPage);
  }

  async mapsToClientSideDelay(): Promise<ClientSideDelayPage> {
    return this.navigateToChallenge('Client Side Delay', URL_PATH_CONTSTANTS.CLIENT_SIDE_DELAY, ClientSideDelayPage);
  }

  async mapsToClick(): Promise<ClickPage> {
    return this.navigateToChallenge('Click', URL_PATH_CONTSTANTS.CLICK, ClickPage);
  }

  async mapsToTextInput(): Promise<TextInputPage> {
    return this.navigateToChallenge('Text Input', URL_PATH_CONTSTANTS.TEXT_INPUT, TextInputPage);
  }

  async mapsToScrollbars(): Promise<ScrollbarsPage> {
    return this.navigateToChallenge('Scrollbars', URL_PATH_CONTSTANTS.SCROLLBARS, ScrollbarsPage);
  }

  async mapsToDynamicTable(): Promise<DynamicTablePage> {
    return this.navigateToChallenge('Dynamic Table', URL_PATH_CONTSTANTS.DYNAMIC_TABLE, DynamicTablePage);
  }

  async mapsToVerifyText(): Promise<VerifyTextPage> {
    return this.navigateToChallenge('Verify Text', URL_PATH_CONTSTANTS.VERIFY_TEXT, VerifyTextPage);
  }

  async mapsToProgressBar(): Promise<ProgressBarPage> {
    return this.navigateToChallenge('Progress Bar', URL_PATH_CONTSTANTS.PROGRESS_BAR, ProgressBarPage);
  }

  async mapsToVisibility(): Promise<VisibilityPage> {
    return this.navigateToChallenge('Visibility', URL_PATH_CONTSTANTS.VISIBILITY, VisibilityPage);
  }

  async mapsToSampleApp(): Promise<SampleAppPage> {
    return this.navigateToChallenge('Sample App', URL_PATH_CONTSTANTS.SAMPLE_APP, SampleAppPage);
  }

  async mapsToMouseOver(): Promise<MouseOverPage> {
    return this.navigateToChallenge('Mouse Over', URL_PATH_CONTSTANTS.MOUSE_OVER, MouseOverPage);
  }

  async mapsToNonBreakingSpace(): Promise<NonBreakingSpacePage> {
    return this.navigateToChallenge('Non-Breaking Space', URL_PATH_CONTSTANTS.NON_BRAKING_SPACE, NonBreakingSpacePage);
  }

  async mapsToOverlappedElement(): Promise<OverlappedElementPage> {
    return this.navigateToChallenge('Overlapped Element', URL_PATH_CONTSTANTS.OVERLAPPED_ELEMENT, OverlappedElementPage);
  }

  async mapsToShadowDom(): Promise<ShadowDomPage> {
    return this.navigateToChallenge('Shadow DOM', URL_PATH_CONTSTANTS.SHADOW_DOM, ShadowDomPage);
  }

  async mapsToAlerts(): Promise<AlertsPage> {
    return this.navigateToChallenge('Alerts', URL_PATH_CONTSTANTS.ALERTS, AlertsPage);
  }

  async mapsToFileUpload(): Promise<FileUploadPage> {
    return this.navigateToChallenge('File Upload', URL_PATH_CONTSTANTS.FILE_UPLOAD, FileUploadPage);
  }

  async mapsToAnimatedButton(): Promise<AnimatedButtonPage> {
    return this.navigateToChallenge('Animated Button', URL_PATH_CONTSTANTS.ANIMATED_BUTTON, AnimatedButtonPage);
  }

  async mapsToDisabledInput(): Promise<DisabledInputPage> {
    return this.navigateToChallenge('Disabled Input', URL_PATH_CONTSTANTS.DISABLED_INPUT, DisabledInputPage);
  }

  async mapsToAutoWait(): Promise<AutoWaitPage> {
    return this.navigateToChallenge('Auto Wait', URL_PATH_CONTSTANTS.AUT0_WAIT, AutoWaitPage);
  }

}
