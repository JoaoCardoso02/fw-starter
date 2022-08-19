import ClickPhonePrefixHandler from '@handlers/ClickPhonePrefixHandler';
import NavigateByKeys from '@handlers/NavigateByKeys';
import SearchByKeyboardHandler from '@handlers/SearchByKeyboardHandler';

import CreatePhonePrefixStructureResolver from './resolvers/CreatePhonePrefixStructureResolver';
import GetCountriesPhonePrefixResolver from './resolvers/GetCountriesPhonePrefixResolver';

declare global {
  interface Window {
    Webflow: Array<unknown>;
  }
}

window.Webflow ||= [];
window.Webflow.push(async () => {
  const countries = await GetCountriesPhonePrefixResolver().execute();
  const createPhonePrefixStructure = CreatePhonePrefixStructureResolver();
  createPhonePrefixStructure.execute(countries);

  const clickPhonePrefixHandler = new ClickPhonePrefixHandler();
  clickPhonePrefixHandler.execute(countries);

  const searchByKeyboardHandler = new SearchByKeyboardHandler();
  searchByKeyboardHandler.execute(countries);

  const navigateByKeys = new NavigateByKeys();
  navigateByKeys.execute(countries);
});
