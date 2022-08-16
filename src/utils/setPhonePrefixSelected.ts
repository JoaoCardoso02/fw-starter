import type Country from '@domain/countries/entities/Country';

import setEveryPhonePrefixAsUnselected from './setEveryPhonePrefixAsUnselected';

export default function setPhonePrefixSelected(dropdownItem: Element, countries: Country[]) {
  setEveryPhonePrefixAsUnselected();

  dropdownItem.setAttribute('aria-selected', 'true');
  dropdownItem.classList.add('w--current');
  (dropdownItem as HTMLElement).focus();

  const title = dropdownItem.getAttribute('title');

  const country = countries.find((country) => country.getName() === title);

  if (!country) return;

  const toggleFlag = document.querySelector('#prefix-dropdown_toggle-2 img');
  const toggleCca2 = document.querySelector('#prefix-dropdown_toggle-2 div');

  toggleFlag?.setAttribute('src', country.getFlag());

  if (toggleCca2) {
    toggleCca2.textContent = country.getIdd();
  }
}
