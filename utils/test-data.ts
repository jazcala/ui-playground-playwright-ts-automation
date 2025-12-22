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
];
