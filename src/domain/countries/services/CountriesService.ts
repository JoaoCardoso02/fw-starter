import Country from '@domain/countries/entities/Country';
import type { ICountriesRepository } from '@domain/countries/types/ICountriesRepository';
import type { ICountriesService } from '@domain/countries/types/ICountriesService';
import type { ICountryPhonePrefixTransformer } from '@domain/countries/types/ICountryPhonePrefixTransformer';

export default class CountriesService implements ICountriesService {
  private countriesRepository: ICountriesRepository;
  private countryPhonePrefixTransformer: ICountryPhonePrefixTransformer;

  constructor(
    countriesRepository: ICountriesRepository,
    countryPhonePrefixTransformer: ICountryPhonePrefixTransformer
  ) {
    this.countriesRepository = countriesRepository;
    this.countryPhonePrefixTransformer = countryPhonePrefixTransformer;
  }

  public async getCountriesPhonePrefix(): Promise<Country[]> {
    const countries = await this.countriesRepository.getCountries();

    return countries.map((country) => {
      const countryMapped = this.countryPhonePrefixTransformer.execute(country);
      return new Country({
        name: countryMapped.name,
        flag: countryMapped.flag,
        idd: countryMapped.idd,
        cca2: countryMapped.cca2,
      });
    });
  }
}
