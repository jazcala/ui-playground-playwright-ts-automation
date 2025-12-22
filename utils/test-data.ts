import { LandingPage } from '../pages/landing.page';

export type LandingNavigationAction = keyof LandingPage;

interface NavigationMap {
  name: string;
  action: LandingNavigationAction;
}

export const NAVIGATION_MAP: NavigationMap[] = [
  {
    name: 'Dynamic ID',
    action: 'mapsToDynamicId'
  },
  {
    name: 'Class Attribute',
    action: 'mapsToClassAttributePage'
  },
  {
    name: 'Hidden Layers',
    action: 'mapsToHiddenLayersPage'
  },
  {
    name: 'Load Delay',
    action: 'mapsToLoadDelay'
  },
  {
    name: 'AJAX Data',
    action: 'mapsToAjaxData'
  },
  {
    name: 'Client Side Delay',
    action: 'mapsToClientSideDelay',
  },
  {
    name: 'Click',
    action: 'mapsToClick',
  },
  {
    name: 'Text Input',
    action: 'mapsToTextInput',
  },
  {
    name: 'Scrollbars',
    action: 'mapsToScrollbars',
  },
  {
    name: 'Dynamic Table',
    action: 'mapsToDynamicTable',
  },
  {
    name: 'Verify Text',
    action: 'mapsToVerifyText',
  },
  {
    name: 'Progress Bar',
    action: 'mapsToProgressBar',
  },
  {
    name: 'Visibility',
    action: 'mapsToVisibility',
  },
  {
    name: 'Sample App',
    action: 'mapsToSampleApp',
  },
  {
    name: 'Mouse Over',
    action: 'mapsToMouseOver',
  },
  {
    name: 'Non-Breaking Space',
    action: 'mapsToNonBreakingSpace',
  },
  {
    name: 'Overlapped Element',
    action: 'mapsToOverlappedElement',
  },
  {
    name: 'Shadow DOM',
    action: 'mapsToShadowDom',
  },
  {
    name: 'Alerts',
    action: 'mapsToAlerts',
  },
  {
    name: 'File Upload',
    action: 'mapsToFileUpload',
  },
  {
    name: 'Animated Button',
    action: 'mapsToAnimatedButton',
  },
  {
    name: 'Disabled Input',
    action: 'mapsToDisabledInput',
  },
  {
    name: 'Auto Wait',
    action: 'mapsToAutoWait',
  },
];
