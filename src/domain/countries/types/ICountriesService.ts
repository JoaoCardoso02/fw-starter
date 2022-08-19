import type Country from '@domain/countries/entities/Country';

export interface ICountriesService {
  getCountriesPhonePrefix(): Promise<Country[]>;
}
