import { createSelector } from 'reselect';

const directoryMenuSelector = (state) => state.directoryMenu;

export const sectionsSelector = createSelector(
  [directoryMenuSelector],
  (directoryMenu) => directoryMenu.sections
);
