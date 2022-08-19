import type Country from '@domain/countries/entities/Country';

// import setPhonePrefixSelected from '@utils/setPhonePrefixSelected';
import type { BaseHandler } from './types/BaseHandler';

export default class NavigateByKeys implements BaseHandler<Country[], void> {
  private index = 0;
  private indexSelected = 0;

  async execute(countries: Country[]) {
    countries;
    const dropdownItems = document.querySelectorAll(
      '.prefix-dropdown_item-2'
    ) as NodeListOf<HTMLElement>;

    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'ArrowDown':
            this.index = Array.from(dropdownItems).findIndex((item) => item === dropdownItem);

            dropdownItems[this.index + 1].focus();
            break;
          case 'ArrowUp':
            this.index = Array.from(dropdownItems).findIndex((item) => item === dropdownItem);

            dropdownItems[this.index - 1].focus();
            break;
        }
      });
    });
  }
}
