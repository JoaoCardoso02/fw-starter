import type Country from '@domain/countries/entities/Country';
import setPhonePrefixSelected from '@utils/setPhonePrefixSelected';

import type { BaseHandler } from './types/BaseHandler';

export default class CreatePhonePrefixStructureHandler implements BaseHandler<Country[], unknown> {
  async execute(countries: Country[]) {
    const prefixDropdown = document.getElementById('prefix-dropdown-test_list');

    countries.forEach((country, index) => {
      const dropdownItem = this.createDropdownItem(country, index);
      const itemImg = this.createImageItem(country);
      const paragraphImg = this.createParagraphItem(country);

      dropdownItem.appendChild(itemImg);
      dropdownItem.appendChild(paragraphImg);
      prefixDropdown?.appendChild(dropdownItem);

      if (index === 0) {
        setPhonePrefixSelected(dropdownItem, countries);
      }
    });
  }

  private createDropdownItem(country: Country, index: number) {
    const item = document.createElement('a');
    item.href = '#';
    item.className = 'prefix-dropdown_item-2 w-inline-block';
    item.dataset.element = 'item';
    item.ariaRoleDescription = 'option';
    item.ariaSelected = 'false';
    item.tabIndex = index;
    item.ariaLabel = country.getName();
    item.title = country.getName();

    return item;
  }

  private createImageItem(country: Country) {
    const image = document.createElement('img');
    image.src = country.getFlag();
    image.className = 'prefix-dropdown_flag';

    return image;
  }

  private createParagraphItem(country: Country) {
    const paragraph = document.createElement('p');
    paragraph.className = 'prefix-dropdown_text';
    paragraph.textContent = country.getCca2();

    return paragraph;
  }
}
