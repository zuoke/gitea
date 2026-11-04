import {localUserSettings} from './user-settings.ts';

const settingKey = 'navbar-sidebar-collapsed';
const collapsedClass = 'navbar-sidebar-collapsed';

export function isNavbarSidebarCollapsed(): boolean {
  return document.documentElement.classList.contains(collapsedClass);
}

// called before the page is rendered, so the content does not shift when the saved state is applied
export function applySavedNavbarSidebarState() {
  document.documentElement.classList.toggle(collapsedClass, localUserSettings.getBoolean(settingKey));
}

export function setNavbarSidebarCollapsed(collapsed: boolean) {
  document.documentElement.classList.toggle(collapsedClass, collapsed);
  localUserSettings.setBoolean(settingKey, collapsed);
}
