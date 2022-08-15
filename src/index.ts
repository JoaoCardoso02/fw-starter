import ClickPhonePrefixHandler from '@handlers/ClickPhonePrefixHandler';

import CreatePhonePrefixStructureResolver from './resolvers/CreatePhonePrefixStructureResolver';
import GetCountriesPhonePrefixResolver from './resolvers/GetCountriesPhonePrefixResolver';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const countries = await GetCountriesPhonePrefixResolver().execute();
  const createPhonePrefixStructure = CreatePhonePrefixStructureResolver();
  createPhonePrefixStructure.execute(countries);

  const clickPhonePrefixHandler = new ClickPhonePrefixHandler();
  clickPhonePrefixHandler.execute();
});
