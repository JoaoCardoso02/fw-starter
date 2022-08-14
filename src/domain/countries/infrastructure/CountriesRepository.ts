import type { ICountriesDTO } from '@domain/countries/dto/ICountriesDTO';
import type { ICountriesRepository } from '@domain/countries/types/ICountriesRepository';
import type HttpClient from '@infrastructure/providers/HttpClient';

export default class CountriesRepository implements ICountriesRepository {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  public async getCountries(): Promise<ICountriesDTO[]> {
    try {
      const { data } = await this.client.get<string>('all?fields=idd,flags,name,cca2');

      return JSON.parse(data);
    } catch (err) {
      throw new Error('Failed to get all countries');
    }
  }
}
