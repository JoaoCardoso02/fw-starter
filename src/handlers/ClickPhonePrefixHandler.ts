import type Country from '@domain/countries/entities/Country';
import setEveryPhonePrefixAsUnselected from '@utils/setEveryPhonePrefixAsUnselected';
import setPhonePrefixSelected from '@utils/setPhonePrefixSelected';

import type { BaseHandler } from './types/BaseHandler';

export default class ClickPhonePrefixHandler implements BaseHandler<Country[], void> {
  async execute(countries: Country[]) {
    const dropdownItems = document.querySelectorAll('.prefix-dropdown_item-2');

    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.addEventListener('click', () => {
        setEveryPhonePrefixAsUnselected();
        setPhonePrefixSelected(dropdownItem, countries);
      });
    });
  }
}
