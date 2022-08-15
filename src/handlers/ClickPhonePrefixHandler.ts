import setEveryPhonePrefixAsUnselected from '@utils/setEveryPhonePrefixAsUnselected';
import setPhonePrefixSelected from '@utils/setPhonePrefixSelected';

import type { BaseHandler } from './types/BaseHandler';

export default class ClickPhonePrefixHandler implements BaseHandler<Event, void> {
  async execute() {
    const dropdownItems = document.querySelectorAll('.prefix-dropdown_item-2');

    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.addEventListener('click', () => {
        setEveryPhonePrefixAsUnselected();
        setPhonePrefixSelected(dropdownItem);
      });
    });
  }
}
