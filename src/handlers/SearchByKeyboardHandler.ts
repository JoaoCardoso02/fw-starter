import type Country from '@domain/countries/entities/Country';
import setPhonePrefixSelected from '@utils/setPhonePrefixSelected';

import type { BaseHandler } from './types/BaseHandler';

export default class SearchByKeyboardHandler implements BaseHandler<Country[], void> {
  private text = '';

  async execute(countries: Country[]) {
    const dropdown = document.getElementById('prefix-dropdown_toggle-2');
    const countriesName = countries.map((country) => country.getName());

    dropdown?.addEventListener('keypress', (event) => {
      this.text += event.key;

      const textRegex = new RegExp(`${this.text}`, 'g');
      const index = countriesName.findIndex((name) => textRegex.test(name));
      if (index < 0) this.text = '';

      const dropdownItems = document.querySelectorAll('.prefix-dropdown_item-2');
      const phonePrefixDesired = dropdownItems[index] as HTMLElement;

      if (phonePrefixDesired) {
        setPhonePrefixSelected(phonePrefixDesired, countries);
        phonePrefixDesired.focus();
        dropdown.focus();
      }
    });
  }
}
