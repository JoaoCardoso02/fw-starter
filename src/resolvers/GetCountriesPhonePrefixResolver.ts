import CountriesRepository from '@domain/countries/infrastructure/CountriesRepository';
import CountriesService from '@domain/countries/services/CountriesService';
import CountryPhonePrefixTransformer from '@domain/countries/transformers/CountryPhonePrefixTransformer';
import GetCountriesPhonePrefixHandler from '@handlers/GetCountriesPhonePrefixHandler';
import HttpProviderFactory from '@infrastructure/providers/HttpProviderFactory';

export default function GetCountriesPhonePrefixResolver() {
  const httpProviderFactory = new HttpProviderFactory();
  const httpClient = httpProviderFactory.build('https://restcountries.com/v3.1');

  const countriesRepository = new CountriesRepository(httpClient);
  const countryPhonePrefixTransformer = new CountryPhonePrefixTransformer();

  const countriesService = new CountriesService(countriesRepository, countryPhonePrefixTransformer);

  const getCountriesPhonePrefixHandler = new GetCountriesPhonePrefixHandler(countriesService);

  return getCountriesPhonePrefixHandler;
}
