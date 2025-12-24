import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { DynamicIdPage } from '../pages/dynamic-id.page';
import { ClassAttributePage } from '../pages/class-attribute.page';
import { HiddenLayersPage } from '../pages/hidden-layers.page';
import { LoadDelayPage } from '../pages/load-delay.page';
import { AjaxDataPage } from '../pages/ajax-data.page';
import { ClientSideDelayPage } from '../pages/client-side-delay.page';
import { ClickPage } from '../pages/click.page';
import { TextInputPage } from '../pages/text-input.page';
import { ScrollbarsPage } from '../pages/scrollbars.page';
import { DynamicTablePage } from '../pages/dynamic-table.page';
import { VisibilityPage } from '../pages/visibility.page';
import { VerifyTextPage } from '../pages/verify-text.page';
import { ProgressBarPage } from '../pages/progress-bar.page';
import { SampleAppPage } from '../pages/sample-app.page';
import { MouseOverPage } from '../pages/mouse-over.page';
import { NonBreakingSpacePage } from '../pages/non-braking-space.page';
import { OverlappedElementPage } from '../pages/overlapped-element.page';
import { ShadowDomPage } from '../pages/shadow-dom.page';
import { AlertsPage } from '../pages/alerts.page';
import { FileUploadPage } from '../pages/file-upload.page';
import { AnimatedButtonPage } from '../pages/animated-button.page';
import { DisabledInputPage } from '../pages/disabledd-input.page';
import { AutoWaitPage } from '../pages/auto-wait.page';

type MyPageObjects = {
  landingPage: LandingPage;
  dynamicIdPage: DynamicIdPage;
  classAttributePage: ClassAttributePage;
  hiddenLayersPage: HiddenLayersPage;
  loadDelaysPage: LoadDelayPage;
  ajaxDataPage: AjaxDataPage;
  clientSideDelayPage: ClientSideDelayPage;
  clickPage: ClickPage;
  textInputPage: TextInputPage;
  scrollbarsPage: ScrollbarsPage;
  dynamicTablePage: DynamicTablePage;
  verifyTextPage: VerifyTextPage;
  progressBarPage: ProgressBarPage;
  visibilityPage: VisibilityPage;
  sampleAppPage: SampleAppPage;
  mouseOverPage: MouseOverPage;
  nonBreakingSpacePage: NonBreakingSpacePage;
  overlappedElementPage: OverlappedElementPage;
  shadowDomPage: ShadowDomPage;
  alertsPage: AlertsPage;
  fileUploadPage: FileUploadPage;
  animatedButtonPage: AnimatedButtonPage;
  disabledInputPage: DisabledInputPage;
  autoWaitPage: AutoWaitPage;
}

export const test = base.extend<MyPageObjects>({

  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await use(landingPage);
  },
  dynamicIdPage: async ({ page }, use) => {
    const dynamicIdPage = new DynamicIdPage(page);
    await use(dynamicIdPage);
  },
  classAttributePage: async ({ page }, use) => {
    const classAttributePage = new ClassAttributePage(page);
    await use(classAttributePage);
  },
  hiddenLayersPage: async ({ page }, use) => {
    const hiddenLayersPage = new HiddenLayersPage(page);
    await use(hiddenLayersPage);
  },
  loadDelaysPage: async ({ page }, use) => {
    const loadDelaysPage = new LoadDelayPage(page);
    await use(loadDelaysPage);
  },
  ajaxDataPage: async ({ page }, use) => {
    const ajaxDataPage = new AjaxDataPage(page);
    await use(ajaxDataPage);
  },
  clientSideDelayPage: async ({ page }, use) => {
    const clientSideDelayPage = new ClientSideDelayPage(page);
    await use(clientSideDelayPage);
  },
  clickPage: async ({ page }, use) => {
    const clickPage = new ClickPage(page);
    await use(clickPage);
  },
  textInputPage: async ({ page }, use) => {
    const textInputPage = new TextInputPage(page);
    await use(textInputPage);
  },
  scrollbarsPage: async ({ page }, use) => {
    const scrollbarsPage = new ScrollbarsPage(page);
    await use(scrollbarsPage);
  },
  dynamicTablePage: async ({ page }, use) => {
    const dynamicTablePage = new DynamicTablePage(page);
    await use(dynamicTablePage);
  },
  verifyTextPage: async ({ page }, use) => {
    const verifyTextPage = new VerifyTextPage(page);
    await use(verifyTextPage);
  },
  progressBarPage: async ({ page }, use) => {
    const progressBarPage = new ProgressBarPage(page);
    await use(progressBarPage);
  },
  visibilityPage: async ({ page }, use) => {
    const visibilityPage = new VisibilityPage(page);
    await use(visibilityPage);
  },
  sampleAppPage: async ({ page }, use) => {
    const sampleAppPage = new SampleAppPage(page);
    await use(sampleAppPage);
  },
  mouseOverPage: async ({ page }, use) => {
    const mouseOverPage = new MouseOverPage(page);
    await use(mouseOverPage);
  },
  nonBreakingSpacePage: async ({ page }, use) => {
    const nonBreakingSpacePage = new NonBreakingSpacePage(page);
    await use(nonBreakingSpacePage);
  },
  overlappedElementPage: async ({ page }, use) => {
    const overlappedElementPage = new OverlappedElementPage(page);
    await use(overlappedElementPage);
  },
  shadowDomPage: async ({ page }, use) => {
    const shadowDomPage = new ShadowDomPage(page);
    await use(shadowDomPage);
  },
  alertsPage: async ({ page }, use) => {
    const alertsPage = new AlertsPage(page);
    await use(alertsPage);
  },
  fileUploadPage: async ({ page }, use) => {
    const fileUploadPage = new FileUploadPage(page);
    await use(fileUploadPage);
  },
  animatedButtonPage: async ({ page }, use) => {
    const animatedButtonPage = new AnimatedButtonPage(page);
    await use(animatedButtonPage);
  },
  disabledInputPage: async ({ page }, use) => {
    const disabledInputPage = new DisabledInputPage(page);
    await use(disabledInputPage);
  },
  autoWaitPage: async ({ page }, use) => {
    const autoWaitPage = new AutoWaitPage(page);
    await use(autoWaitPage);
  },
});

export { expect } from '@playwright/test';
