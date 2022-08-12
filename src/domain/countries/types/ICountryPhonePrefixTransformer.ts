import type { ICountriesDTO } from '@domain/countries/dto/ICountriesDTO';
import type { ICountry } from '@domain/countries/types/ICountry';

export interface ICountryPhonePrefixTransformer {
  execute(countries: ICountriesDTO): ICountry;
}
