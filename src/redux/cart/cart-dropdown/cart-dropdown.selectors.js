import { createSelector } from 'reselect';

const cartDropdownSelector = (state) => state.cartDropdown;

export const showCartDropdownSelector = createSelector(
  [cartDropdownSelector],
  (cartDropdown) => cartDropdown.showCartDropdown
);
