import type { ICountriesDTO } from '@domain/countries/dto/ICountriesDTO';

export interface ICountriesRepository {
  getCountries(): Promise<ICountriesDTO[]>;
}
